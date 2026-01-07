import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import qr from "../assets/img/qr.png";
import app from "../assets/img/app.png";
import AppleIcon from "@mui/icons-material/Apple";
import playMarket from "../assets/img/play.png";

export default function Advert() {
  return (
    <Container>
      <Box
        sx={{
          py: { xs: "40px", md: "80px" },
          display: "flex",
          // Mobilda ustma-ust, desktopda yonma-yon
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 6, md: 2 }
        }}
      >
        {/* Chap taraf: Matnlar va Tugmalar */}
        <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "465px" } }}>
          <Typography
            fontWeight={"bold"}
            textTransform={"capitalize"}
            sx={{ fontSize: { xs: 32, md: 43 } }}
            mb={2}
          >
            download app
          </Typography>
          <Typography mb={5} color="text.secondary">
            Now finding the new job just got even easier with our new app!
          </Typography>

          {/* QR Code Bo'limi - Mobilda ko'pincha yashiriladi yoki kichraytiriladi */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // Juda kichik ekranlarda yashirish
              width: "100%",
              border: "1px solid #E5E7EB",
              borderRadius: 4,
              p: "20px 40px",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              mb: 3,
            }}
          >
            <Box component="img" src={qr} alt="qr-code" sx={{ width: 80, height: 80 }} />
            <Typography fontWeight={"bold"} fontSize={17} textAlign="left">
              Scan QR code to <br /> install on your device
            </Typography>
          </Box>

          {/* Ajratuvchi chiziq (OR) */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              width: "100%",
              height: "1px",
              border: "1px dashed lightgrey",
              my: 4,
              opacity: 0.5
            }}
          />

          {/* Do'kon tugmalari */}
          <Stack 
            direction={{ xs: "column", sm: "row" }} // Mobilda tugmalar ustma-ust
            spacing={2} 
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {/* Apple Store */}
            <Button
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "12px",
                px: 3,
                py: 1,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: { xs: "100%", sm: "auto" },
                "&:hover": { backgroundColor: "#222" },
              }}
            >
              <AppleIcon sx={{ fontSize: 32 }} />
              <Box textAlign="left">
                <Typography fontSize={10} sx={{ opacity: 0.8 }}>Download on the</Typography>
                <Typography fontSize={16} fontWeight={600}>Apple Store</Typography>
              </Box>
            </Button>

            {/* Google Play */}
            <Button
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "12px",
                px: 3,
                py: 1,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                width: { xs: "100%", sm: "auto" },
                "&:hover": { backgroundColor: "#222" },
              }}
            >
              <Box component="img" src={playMarket} alt="playMarket" sx={{ width: 28, height: 28 }} />
              <Box textAlign="left">
                <Typography fontSize={10} sx={{ opacity: 0.8 }}>Download from</Typography>
                <Typography fontSize={16} fontWeight={600}>Google Play</Typography>
              </Box>
            </Button>
          </Stack>
        </Box>

        {/* O'ng taraf: Telefon rasmi */}
        <Box 
          sx={{ 
            width: "100%", 
            maxWidth: { xs: "320px", md: "560px" },
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box 
            component="img" 
            src={app} 
            alt="app-image" 
            sx={{ 
              width: "100%", 
              height: "auto",
              objectFit: "contain"
            }} 
          />
        </Box>
      </Box>
    </Container>
  );
}