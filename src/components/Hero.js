import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import companies from "../assets/img/img-hero.png";
import heroImg from "../assets/img/hero-img.png";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at left, rgba(249,115,22,0.15), transparent 40%), linear-gradient(90deg, #05010d 0%, #020617 50%, #05010d 100%)",
          color: "#fff",
          pt: { xs: 10, md: 14 },
        }}
      >
        <Container >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: 5,
            }}
          >
            <Box maxWidth={460}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.15,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Get the{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg, #f97316, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Career
                </Box>
                <br />
                you deserve
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  mb: 4,
                  textAlign: "center",
                }}
              >
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  p: 0.5,
                  width: "100%",
                  maxWidth: "650px",
                  border: "1px solid #eee",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                  mb: 3,
                }}
              >
                <TextField
                  placeholder="Job title, keyword..."
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start" sx={{ ml: 1 }}>
                        <SearchIcon sx={{ color: "#999", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                    style: { fontSize: "14px" }, 
                  }}
                  sx={{ flex: 1.5 }}
                />

                <Box
                  sx={{ width: "1px", height: "24px", backgroundColor: "#eee" }}
                />

                <TextField
                  placeholder="Location"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start" sx={{ ml: 1 }}>
                        <LocationOnIcon
                          sx={{ color: "#999", fontSize: "20px" }}
                        />
                      </InputAdornment>
                    ),
                    style: { fontSize: "14px" },
                  }}
                  sx={{ flex: 1 }}
                />

                <Button
                  variant="contained"
                  sx={{
                    minWidth: "45px", 
                    height: "45px",
                    backgroundColor: "#f97316",
                    borderRadius: "10px",
                    ml: 1,
                    "&:hover": {
                      backgroundColor: "#ea580c",
                    },
                  }}
                >
                  <SearchIcon sx={{ fontSize: "22px" }} />
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  opacity: 0.7,
                  mb: 5,
                }}
              >
                <img src={companies} alt="" />
              </Box>

              <Box sx={{ display: "flex", gap: 6 }}>
                <Stat value="2m+" label="Jobs" />
                <Stat value="500k+" label="Successful hiring" />
                <Stat value="250k+" label="Partners" />
                <Stat value="156k+" label="Employee" />
              </Box>
            </Box>

            {/* RIGHT (siz o‘zingiz qilasiz) */}
            <Box
              sx={{
                width: "100%",
                height: 600,
                overflow: "hidden",
                display: { xs: "none", md: "block" },
              }}
            >
              <img src={heroImg} alt="" />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700}>
        {value}
      </Typography>
      <Typography fontSize={14} color="rgba(255,255,255,0.6)">
        {label}
      </Typography>
    </Box>
  );
}
