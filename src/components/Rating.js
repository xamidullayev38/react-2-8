import React, { use, useState } from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import StarRateIcon from "@mui/icons-material/StarRate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { grey } from "@mui/material/colors";

const comments = [
  {
    id: 1,
    name: "Lucian  Obrien",
    role: "CTO",
  },
  {
    id: 2,
    name: "Deja   Brady",
    role: "Project Cordinator",
  },
  {
    id: 3,
    name: "Harrison   Stein",
    role: "Team Leader",
  },
  {
    id: 4,
    name: "Reece Chung",
    role: "Software Developer",
  },
  {
    id: 5,
    name: "Lainey Davidson",
    role: "Marketing Strategist",
  },
  {
    id: 6,
    name: "Chrisopher Cardness",
    role: "Data Analyst",
  },
  {
    id: 7,
    name: "Mealnie Noble",
    role: "Product Owner",
  },
];

export default function Rating() {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  return (
    <Box
      sx={{
        width: "100%",
        py: "120px",
        bgcolor: "#F4F6F8",
      }}
    >
      <Container maxWidth="md">
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: { xs: 32, md: 48 },
            mb: 8,
            fontWeight: 800,
            color: "#212B36",
          }}
        >
          What our customer say
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Swiper
            onSwiper={setSwiper} // Swiper obyektini saqlab olamiz
            onSlideChange={(s) => {
              setIsBeginning(s.isBeginning);
              setIsEnd(s.isEnd);
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {comments.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Box
                    sx={{ maxWidth: "720px", mx: "auto", textAlign: "center" }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      spacing={0.5}
                      sx={{ mb: 3 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <StarRateIcon
                          key={i}
                          sx={{ color: "#FFAB00", fontSize: 28 }}
                        />
                      ))}
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: { xs: 18, md: 24 },
                        lineHeight: 1.6,
                        mb: 4,
                        fontWeight: 500,
                        color: "#212B36",
                      }}
                    >
                      "Amazing experience i love it a lot. Thanks to the team
                      that dreams come true, great! I appreciate there attitude
                      and approach."
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ color: grey[500], fontSize: 14, mt: 0.5 }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 6 }}
          >
            <IconButton
              className="prev-btn"
              sx={{
                color: grey[400],
                "&:hover": { color: "#212B36" },
              }}
              disabled={isBeginning}
            >
              <KeyboardArrowLeftIcon fontSize="large" />
            </IconButton>

            <IconButton
              className="next-btn"
              sx={{
                color: grey[400],
                "&:hover": { color: "#212B36" },
              }}
              disabled={isEnd}
            >
              <KeyboardArrowRightIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
