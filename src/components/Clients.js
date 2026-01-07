import { Box, Container, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { keyframes } from "@mui/system";

import microsoft from "../assets/img/microsoft.png";
import netflix from "../assets/img/netflix.png";
import slack from "../assets/img/slack.png";
import spotify from "../assets/img/spotify.png";
import tripad from "../assets/img/tripad.png";
import vimeo from "../assets/img/vimeo.png";

const clients = [
  { id: 1, name: "Tripadvisor", img: microsoft },
  { id: 2, name: "Vimeo", img: netflix },
  { id: 3, name: "Airbnb", img: slack },
  { id: 4, name: "Dropbox", img: spotify },
  { id: 5, name: "Facebook", img: tripad },
  { id: 6, name: "Google", img: vimeo },
];

// 🔁 animation
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function Clients() {
  return (
    <Container sx={{ py: "120px" }}>
      <Box maxWidth="480px" mx="auto">
        <Typography fontSize={43} fontWeight="bold" mb={3} textAlign="center">
          Our Clients
        </Typography>
        <Typography color={grey[500]} mb={10} textAlign="center">
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget
          lorem.
        </Typography>
      </Box>

      {/* viewport */}
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* animated row */}
        <Stack
          direction="row"
          spacing={8}
          sx={{
            width: "max-content",
            animation: `${marquee} 30s linear infinite`,
            "& img": {
              height: { xs: 30, md: 40 },
              transition: "0.3s",
              "&:hover": {
                opacity: 1,
              },
            },
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <Box key={index} sx={{
                border: '1px solid lightgrey',
                borderRadius: '16px',
                padding: '31px 45px'
            }}>
              <Box
                key={index}
                component="img"
                src={client.img}
                alt={client.name}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
