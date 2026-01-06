import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SliderJobs from "./helpers/SliderJobs";
import img1 from "../assets/img/north.png";
import img2 from "../assets/img/aldi.png";
import img3 from "../assets/img/coca.png";
import img4 from "../assets/img/tiktok.png";
import img5 from "../assets/img/huawei.png";
import img6 from "../assets/img/sales.png";
import img7 from "../assets/img/macdonald.png";
import img8 from "../assets/img/product-manager.png";

const cards = [
  {
    id: 1,
    title: "Lueilwitz and Sons",
    jobs: 101,
    img: img1,
  },
  {
    id: 2,
    title: "Gleichner, Mueller and ",
    jobs: 102,
    img: img2,
  },
  {
    id: 3,
    title: "Nikolaus - Leuschke",
    jobs: 103,
    img: img3,
  },
  {
    id: 4,
    title: "Hegmann, Kreiger and Bayer",
    jobs: 104,
    img: img4,
  },
  {
    id: 5,
    title: "Grimes Inc",
    jobs: 105,
    img: img5,
  },
  {
    id: 6,
    title: "Durgan - Murazik",
    jobs: 106,
    img: img6,
  },
  {
    id: 7,
    title: "Altenwerth, Medhurst and Roberts",
    jobs: 107,
    img: img7,
  },
  {
    id: 8,
    title: "Raynor Group",
    jobs: 108,
    img: img8,
  },
  {
    id: 9,
    title: "Mraz, Donnelly and Collins",
    jobs: 109,
    img: img2,
  },
  {
    id: 10,
    title: "Padberg - Bailey",
    jobs: 110,
    img: img5,
  },
  {
    id: 11,
    title: "Heidenreich, Stokes and Parker",
    jobs: 111,
    img: img7,
  }
];

export default function Companies() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#F4F6F8",
      }}
    >
      <Container>
        <Typography
          textAlign={"center"}
          fontSize={43}
          lineHeight={"64px"}
          sx={{
            pt: "80px",
          }}
        >
          Top companies
        </Typography>

        <SliderJobs cards={cards} />
      </Container>
    </Box>
  );
}
