import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const categories = [
  {
    title: "Accounting / Finance",
    jobs: "497 jobs",
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Marketing",
    jobs: "763 jobs",
    icon: <BarChartIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Design",
    jobs: "684 jobs",
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Development",
    jobs: "451 jobs",
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "IT - Hardware",
    jobs: "433 jobs",
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Customer Service",
    jobs: "463 jobs",
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Health and Care",
    jobs: "951 jobs",
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: "Banking",
    jobs: "194 jobs",
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
  },
];

export default function Categories() {
  return (
    <Container
      sx={{
        py: "80px",
      }}
    >
      <Box sx={{pb: '80px'}}>
        <Typography textAlign={"center"} fontSize={43} fontWeight={"bold"}>
          Hot categories
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4} justifyContent={'center'}>
          {categories.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} >
              <Card
                elevation={0}
                sx={{
                  width: '258px',
                  height: '258px',
                  textAlign: "center",
                  borderRadius: "16px",
                  border: "1px solid #f0f0f0",
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    transform: "translateY(-5px)",
                    borderColor: "transparent",
                  },
                }}
              >
                <CardContent sx={{ py: 5 }}>
                  <Box
                    sx={{
                      mb: 2,
                      color: "#212B36",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.disabled" }}>
                    {item.jobs}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
