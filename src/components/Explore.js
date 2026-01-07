import React from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const steps = [
  {
    id: 1,
    title: "Create an account",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
    step: "STEP 1",
  },
  {
    id: 2,
    title: "Complete your profile",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/2906/2906151.png",
    step: "STEP 2",
  },
  {
    id: 3,
    title: "Search your job",
    desc: "Nunc nonummy metus. Donec elit libero.",
    icon: "https://cdn-icons-png.flaticon.com/512/2642/2642402.png",
    step: "STEP 3",
  },
];

const Explore = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}
    >
      <Typography
        variant="overline"
        sx={{ color: "text.secondary", fontWeight: "bold", letterSpacing: 2 }}
      >
        FOR CANDIDATES
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          mt: 1,
          mb: 2,
          color: "#1A2027",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Explore thousands of jobs
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: 500,
          mx: "auto",
          mb: { xs: 5, md: 8 },
        }}
      >
        Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
      </Typography>

      <Grid
        container
        spacing={{ xs: 4, md: 0 }}
        justifyContent="center"
        sx={{ mb: 8, position: "relative" }}
      >
        {steps.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ position: "relative", mb: 4 }}>
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: { xs: 80, md: 100 },
                    height: { xs: 80, md: 100 },
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 2,
                  }}
                />

                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: "50%",
                      left: "100%",
                      width: "100%",
                      zIndex: 1,
                      transform: "translateX(-20px)",
                    }}
                  />
                )}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "text.disabled",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {item.step}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, fontSize: "1.1rem" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", maxWidth: 250 }}
              >
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
          backgroundColor: "#1A2027",
          color: "#fff",
          textTransform: "none",
          px: 4,
          py: 1.5,
          borderRadius: "8px",
          fontWeight: "bold",
          width: { xs: "100%", sm: "auto" }, // Mobilda to'liq kenglik
          "&:hover": { backgroundColor: "#2D3748" },
        }}
      >
        Upload your CV
      </Button>
    </Container>
  );
};

export default Explore;
