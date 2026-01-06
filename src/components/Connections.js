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

// Namuna ma'lumotlar
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
    <Box sx={{ py: "120px", position: "relative", overflow: "hidden" }}>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: "60px" }}>
          <Box
            sx={{ minWidth: "365px", maxWidth: "365px", position: "relative" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: "24px",
                fontSize: "43px",
                lineHeight: "1.2",
              }}
            >
              Global <br /> connections
            </Typography>
            <Typography sx={{ color: grey[600], mb: "40px", fontSize: "16px" }}>
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
                "&:hover": { backgroundColor: "#454f5b" },
              }}
            >
              View all
            </Button>

            <img
              src={bgImg}
              alt=""
              style={{
                position: "absolute",
                left: "-50px",
                zIndex: "-1",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 }, // Yarimta karta keyingisi borligini bildiradi
              }}
              pagination={{ clickable: true }}
              style={{ paddingBottom: "50px" }} // Nuqtalar uchun joy
            >
              {connectionData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: "16px",
                      border: "1px solid #f0f0f0",
                      transition: "0.3s",
                      "&:hover": { boxShadow: "0 12px 24px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      sx={{
                        width: "100%",
                        height: "280px",
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
