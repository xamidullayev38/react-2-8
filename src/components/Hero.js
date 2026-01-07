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
          pt: { xs: 12, md: 14 }, 
          pb: { xs: 8, md: 0 },
        }}
      >
        <Container>
          <Box 
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              alignItems: "center",
              gap: { xs: 5, md: 2 },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: 460 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3.5rem" }, 
                  lineHeight: 1.15,
                  mb: 3,
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
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  maxWidth: { xs: "100%", md: 400 },
                  mx: { xs: "auto", md: 0 }, 
                }}
              >
                Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                laoreet sapien, quis venenatis ante odio sit amet eros.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderRadius: { xs: "16px", sm: "12px" },
                  p: 0.8,
                  width: "100%",
                  maxWidth: "650px",
                  border: "1px solid #eee",
                  mb: 3,
                  gap: { xs: 1, sm: 0 },
                }}
              >
                <TextField
                  placeholder="Job title..."
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start" sx={{ ml: 1 }}>
                        <SearchIcon sx={{ color: "#999" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1.5, width: "100%", px: 1 }}
                />

              
                <Box
                  sx={{
                    width: "1px",
                    height: "24px",
                    backgroundColor: "#eee",
                    display: { xs: "none", sm: "block" },
                  }}
                />

                <TextField
                  placeholder="Location"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start" sx={{ ml: 1 }}>
                        <LocationOnIcon sx={{ color: "#999" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flex: 1, width: "100%", px: 1 }}
                />

                <Button
                  variant="contained"
                  fullWidth={{ xs: true, sm: false }} 
                  sx={{
                    minWidth: { xs: "100%", sm: "48px" },
                    height: "48px",
                    backgroundColor: "#f97316",
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#ea580c" },
                  }}
                >
                  <SearchIcon />
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 3, md: 5 },
                  flexWrap: "wrap", 
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Stat value="2m+" label="Jobs" />
                <Stat value="500k+" label="Hiring" />
                <Stat value="250k+" label="Partners" />
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: { xs: "none", md: "flex" }, 
              }}
            >
              <Box
                component="img"
                src={heroImg}
                alt="Hero"
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  height: "auto",
                  animation: "float 6s ease-in-out infinite", 
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                  },
                }}
              />
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
