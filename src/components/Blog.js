import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Blog() {
  return (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      {/* HEADER QISMI */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Mobilda ustma-ust
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 3,
          mb: { xs: 4, md: 8 }
        }}
      >
        <Box>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={grey[500]}
            fontWeight="bold"
            letterSpacing={1.2}
            mb={2}
          >
            Blog
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: "28px", md: "43px" }, 
              fontWeight: "bold", 
              mb: 2 
            }}
          >
            Read our latest news
          </Typography>
          <Typography sx={{ maxWidth: "460px", color: grey[500] }}>
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et,
            volutpat molestie, porta ut, ligula.
          </Typography>
        </Box>
        
        <Button
          variant="text"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            p: 0,
            "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
          }}
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: "12px !important" }} />}
        >
          View all
        </Button>
      </Box>

      {/* GRID QISMI */}
      <Grid container spacing={4}>
        {/* KATTA KARTA (LEFT) */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              minHeight: { xs: 350, md: 500 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              borderRadius: 4,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.01)" }
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="caption" sx={{ opacity: 0.8, display: "block", mb: 1 }}>
                12 Aug 2024 • 8 min read
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "22px", md: "32px" },
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                The Future of Renewable Energy: Innovations and Challenges Ahead
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, mt: 2, display: { xs: "none", sm: "block" } }}>
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
                molestiae ut facere aut...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* KICHIK KARTALAR (RIGHT) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: "none",
                    bgcolor: "transparent",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={`https://picsum.photos/400/300?random=${item}`}
                    alt="Article image"
                    sx={{ 
                      borderRadius: 4, 
                      mb: 1.5,
                      transition: "0.3s",
                      "&:hover": { opacity: 0.8, cursor: "pointer" } 
                    }}
                  />
                  <Box sx={{ px: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      12 Aug 2024 • 8 min read
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        lineHeight: 1.3,
                        mt: 1,
                        cursor: "pointer",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden", // Matn 2 qatordan oshsa "..." bo'ladi
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      Exploring the Impact of Artificial Intelligence on Modern Workflows
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}