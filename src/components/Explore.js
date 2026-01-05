import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Qadamlar uchun ma'lumotlar massivi
const steps = [
  {
    id: 1,
    title: "Create an account",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/6073/6073873.png", // Masalan
  },
  {
    id: 2,
    title: "Complete your profile",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/2906/2906151.png",
  },
  {
    id: 3,
    title: "Search your job",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/2642/2642402.png",
  },
];

const Explore = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'bold', letterSpacing: 2 }}>
        FOR CANDIDATES
      </Typography>
      <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mt: 1, mb: 2, color: '#1A2027' }}>
        Explore thousands of jobs
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', mb: 8 }}>
        Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. <br />
        Morbi mattis ullamcorper velit.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {steps.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ p: 2 }}>
              <Box 
                component="img" 
                src={item.icon} 
                alt={item.title}
                sx={{ width: 100, height: 100, mb: 4, objectFit: 'contain' }}
              />
              <Typography variant="caption" sx={{ display: 'block', color: 'text.disabled', fontWeight: 'bold', mb: 1 }}>
                {item.step}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: '#1A2027',
          color: '#fff',
          textTransform: 'none',
          px: 4,
          py: 1.5,
          borderRadius: '8px',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#2D3748',
          },
        }}
      >
        Upload your CV
      </Button>
    </Container>
  );
};

export default Explore;