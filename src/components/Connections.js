import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgImg from "../assets/img/earth.png";

const connectionData = [
  {
    id: 1,
    country: "United Arab Emirates",
    jobs: "497 jobs",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400",
  },
  {
    id: 2,
    country: "Afghanistan",
    jobs: "763 jobs",
    img: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=400",
  },
  {
    id: 3,
    country: "Antigua and Barbuda",
    jobs: "684 jobs",
    img: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=400",
  },
  {
    id: 4,
    country: "Anguilla",
    jobs: "520 jobs",
    img: "https://zone-ui.vercel.app/assets/images/travel/travel-4.webp",
  },
  {
    id: 1,
    country: "United Arab Emirates",
    jobs: "497 jobs",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400",
  },
  {
    id: 2,
    country: "Afghanistan",
    jobs: "763 jobs",
    img: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?auto=format&fit=crop&w=400",
  },
];

export default function Connections() {
  return (
    <Box sx={{ 
      py: { xs: "60px", md: "120px" }, 
      position: "relative", 
      overflow: "hidden" 
    }}>
      <Container>
        <Box 
          sx={{ 
            display: "flex", 
            // Mobilda ustma-ust (column), desktopda yonma-yon (row)
            flexDirection: { xs: "column", md: "row" }, 
            alignItems: { xs: "center", md: "center" },
            gap: { xs: "40px", md: "60px" },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          {/* Chap taraf: Matnlar qismi */}
          <Box
            sx={{ 
              minWidth: { xs: "100%", md: "365px" }, 
              maxWidth: { xs: "100%", md: "365px" }, 
              position: "relative" 
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: "24px",
                fontSize: { xs: "32px", md: "43px" }, // Mobilda shrift kichrayadi
                lineHeight: "1.2",
              }}
            >
              Global <br /> connections
            </Typography>
            <Typography sx={{ 
              color: grey[600], 
              mb: "40px", 
              fontSize: "16px",
              maxWidth: { xs: "400px", md: "100%" },
              mx: { xs: "auto", md: 0 }
            }}>
              Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
              neque dolor, sagittis eget, iaculis quis.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#212b36",
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 700,
                width: { xs: "100%", sm: "auto" }, // Mobilda tugma eniga to'liq bo'ladi
                "&:hover": { backgroundColor: "#454f5b" },
              }}
            >
              View all
            </Button>

            {/* Fon rasmi (Earth) - Mobilda kichrayadi yoki yashiriladi */}
            <Box
              component="img"
              src={bgImg}
              alt=""
              sx={{
                position: "absolute",
                left: { xs: "-20px", md: "-50px" },
                top: { xs: "-20px", md: "0" },
                width: { xs: "150px", md: "auto" },
                zIndex: "-1",
                opacity: { xs: 0.5, md: 1 }
              }}
            />
          </Box>

          {/* O'ng taraf: Slayder qismi */}
          <Box sx={{ 
            width: "100%", // Mobilda to'liq eni
            flexGrow: 1, 
            minWidth: 0 // Swiper buzilib ketmasligi uchun shart
          }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                // 0px dan 640px gacha: 1.2 ta slayder (keyingisi ko'rinib turishi uchun)
                0: { slidesPerView: 1.2, spaceBetween: 16 },
                // 640px dan yuqori: 2 ta slayder
                640: { slidesPerView: 2 },
                // 1024px dan yuqori: 2.5 ta slayder
                1024: { slidesPerView: 2.5 },
              }}
              pagination={{ clickable: true }}
              style={{ paddingBottom: "60px" }}
            >
              {connectionData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: "16px",
                      border: "1px solid #f0f0f0",
                      transition: "0.3s",
                      height: "100%",
                      "&:hover": { boxShadow: "0 12px 24px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      sx={{
                        width: "100%",
                        height: { xs: "200px", md: "280px" }, // Mobilda rasm balandligi kichrayadi
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", py: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, mb: 0.5 }}
                      >
                        {item.country}
                      </Typography>
                      <Typography variant="body2" sx={{ color: grey[500] }}>
                        {item.jobs}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}