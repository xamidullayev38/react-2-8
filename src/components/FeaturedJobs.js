import { Avatar, Box, Button, Card, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';


import aldi from '../assets/img/aldi.png'
import sales from '../assets/img/sales.png'
import contentWriter from '../assets/img/content-writer.png'
import huawei from '../assets/img/huawei.png'
import macdonald from '../assets/img/macdonald.png'
import productManager from '../assets/img/product-manager.png'

const jobData = [
  { id: 1, title: "Project Manager", company: "Altenwerth, Medhurst and Roberts", location: "Angola",
     logo: aldi, details: ["7 year exp", "Freelance", "Competitive", "Intern/student"] },
  { id: 2, title: "Sales Executive", company: "Raynor Group", location: "Antarctica",
     logo: sales, details: ["8 year exp", "Part time", "$12,000", "Manager"] },
  { id: 3, title: "Content Writer", company: "Mraz, Donnelly and Collins", location: "Argentina",
     logo: contentWriter, details: ["9 year exp", "Full time", "$12,000", "No experience"] },
  { id: 4, title: "Network Administrator", company: "Padberg - Bailey", location: "American Samoa",
     logo: huawei, details: ["10 year exp", "Part time", "Competitive", "Manager"] },
  { id: 5, title: "Customer Service", company: "Heidenreich, Stokes and Parker", location: "Austria",
     logo: macdonald, details: ["11 year exp", "Freelance", "$12,000", "Intern/student"] },
  { id: 6, title: "Product Manager", company: "Pagac and Sons", location: "Australia",
     logo: productManager, details: ["12 year exp", "Part time", "$12,000", "Manager"] },
];

export default function FeaturedJobs() {
  return (
    <Container sx={{my:'120px'}} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexWrap: 'wrap'
        }}
      >
        <Typography fontSize={24} color={grey[600]} textTransform={"uppercase"}>
          Featured Jobs
        </Typography>
        <Box maxWidth={'731px'}>
          <Typography width={'100%'} fontWeight={'bold'} fontSize={26} lineHeight={'48px'}>
            Jobs available apply to Editorial Specialist, Account Manager, Human
            Resources Specialist and more!
          </Typography>
        </Box>
      </Box>



      <Grid container spacing={3} sx={{py: '80px',}}>
          {jobData.map((job) => (
            <Grid item xs={12} sm={6} md={3} key={job.id}>
              <Card 
                elevation={0} 
                sx={{ 
                    width:'362px',
                  borderRadius: 4, 
                  border: '1px solid #E5E7EB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': { 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {/* Yuqori qism */}
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                    <Avatar 
                      src={job.logo} 
                      variant="rounded" 
                      sx={{ width: 48, height: 48, borderRadius: 2 }} 
                    />
                    <IconButton size="small" sx={{ color: 'text.disabled' }}>
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#00B8D9', fontWeight: 600, mb: 1.5, cursor: 'pointer' }}>
                    {job.company}
                  </Typography>
                  
                  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'text.secondary', mb: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{job.location}</Typography>
                  </Stack>

                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    Posted at: 05 Jan 2026
                  </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed', borderColor: '#F3F4F6' }} />

                {/* Pastki qism - Detallar */}
                <Box sx={{ p: 2.5, bgcolor: '#FDFDFD' }}>
                  <Grid container spacing={2}>
                    <DetailItem icon={<SignalCellularAltIcon fontSize="inherit"/>} label={job.details[0]} />
                    <DetailItem icon={<AccessTimeIcon fontSize="inherit"/>} label={job.details[1]} />
                    <DetailItem icon={<AccountBalanceWalletIcon fontSize="inherit"/>} label={job.details[2]} />
                    <DetailItem icon={<GroupIcon fontSize="inherit"/>} label={job.details[3]} />
                  </Grid>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button sx={{mx: 'auto', display: 'block'}} color="dark"  variant="outlined">View all +</Button>
    </Container>
  );
}
const DetailItem = ({ icon, label }) => (
  <Grid item xs={6}>
    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
      <Box sx={{ display: 'flex', fontSize: 18, color: 'text.disabled' }}>{icon}</Box>
      <Typography variant="caption" sx={{ fontWeight: 500 }}>{label}</Typography>
    </Stack>
  </Grid>
);
