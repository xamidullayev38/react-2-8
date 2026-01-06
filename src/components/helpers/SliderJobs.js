import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderJobs({ cards }) {
  return (
    <Box 
      sx={{ 
        maxWidth: "1200px", 
        mx: "auto", 
        position: "relative", 
        px: 6, 
        py: 8,
        bgcolor: "#F4F6F8" 
      }}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1} 
        spaceBetween={20}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper"
        style={{ padding: "20px 5px" }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              elevation={0}
              sx={{
                height: "240px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                border: "1px solid #f0f0f0",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transform: "translateY(-5px)"
                }
              }}
            >
              <Box 
                component="img" 
                src={item.img} 
                alt={item.title}
                sx={{ width: 60, height: 60, mb: 2, objectFit: "contain" }}
              />
              <Typography color="text.secondary" variant="caption" sx={{ mb: 1 }}>
                {item.jobs} Jobs
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ fontWeight: 700, textAlign: "center", px: 1 }}
              >
                {item.title}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton 
        className="prev-btn"
        sx={{ 
          position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, bgcolor: "white", boxShadow: 1, "&:hover": { bgcolor: "#eee" }
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      
      <IconButton 
        className="next-btn"
        sx={{ 
          position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, bgcolor: "white", boxShadow: 1, "&:hover": { bgcolor: "#eee" }
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}