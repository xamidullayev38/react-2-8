import { Box, Button, InputBase, Typography, } from "@mui/material";
import React from "react";
import bg from "../assets/img/bgImage.png";

export default function Subscribe() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: "60px", md: "120px" }, // Mobilda paddingni kamaytirdik
        px: 2, // Yon tomondan masofa
      }}
    >
      <Box 
        sx={{ 
          maxWidth: "560px", 
          mx: "auto", 
          textAlign: "center" // Matnlarni markazga olamiz
        }}
      >
        <Typography 
          sx={{ 
            fontSize: { xs: 28, md: 43 }, // Mobilda shrift kichrayadi
            fontWeight: "bold", 
            color: "white", 
            mb: 2,
            lineHeight: 1.2
          }}
        >
          Get the right job for you
        </Typography>
        <Typography color="white" mb={5} sx={{ opacity: 0.9 }}>
          Subscribe to get updated on latest and relevant career opportunities
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Mobilda ustma-ust, sm+ da yonma-yon
            alignItems: "center",
            width: "100%",
            maxWidth: 620,
            // Mobilda balandlikni auto qilamiz, sm+ da 64px
            height: { xs: "auto", sm: 64 }, 
            backgroundColor: { xs: "transparent", sm: "#fff" }, // Mobilda foni shaffof (chunki ustma-ust)
            borderRadius: "8px",
            overflow: "hidden",
            gap: { xs: 2, sm: 0 } // Mobilda elementlar orasida masofa
          }}
        >
          <InputBase
            placeholder="Enter your email"
            sx={{
              flex: 1,
              width: "100%",
              height: { xs: 56, sm: "100%" },
              px: 3,
              fontSize: 16,
              color: "#333",
              backgroundColor: "#fff", // Mobilda ham oq fon bo'lishi uchun
              borderRadius: { xs: "8px", sm: "8px 0 0 8px" },
              "&::placeholder": {
                color: "#aaa",
              },
            }}
          />

          <Button
            fullWidth={{ xs: true, sm: false }} // Mobilda to'liq eni bo'yicha
            sx={{
              height: { xs: 50, sm: "100%" },
              px: 4,
              minWidth: { xs: "100%", sm: "160px" },
              borderRadius: { xs: "8px", sm: "0 8px 8px 0" },
              backgroundColor: "#ff6a1a",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ff5a00",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}