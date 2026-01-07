import React from "react";
import { Grid, Box, Container, Typography, TextField, Button, IconButton, Stack, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Footer = () => {
  const menuSections = [
    {
      title: "Marketing",
      links: [
        "Landing",
        "Services",
        "Case studies",
        "Case study",
        "Posts",
        "Post",
        "About",
        "Contact",
      ],
    },
    {
      title: "Travel",
      links: [
        "Landing",
        "Tours",
        "Tour",
        "Checkout",
        "Order completed",
        "Posts",
        "Post",
        "About",
        "Contact",
      ],
    },
    {
      title: "Career",
      links: ["Landing", "Jobs", "Job", "Posts", "Post", "About", "Contact"],
    },
    {
      title: "E-learning",
      links: [
        "Landing",
        "Courses",
        "Course",
        "Posts",
        "Post",
        "About",
        "Contact",
      ],
    },
    {
      title: "E-commerce",
      links: [
        "Landing",
        "Products",
        "Product",
        "Cart",
        "Checkout",
        "Order completed",
        "Wishlist",
        "Compare",
        "Account personal",
        "Account wishlist",
        "Account vouchers",
        "Account orders",
        "Account payment",
      ],
    },
    {
      title: "Common",
      links: [
        "Sign in (split)",
        "Sign up (split)",
        "Sign in (centered)",
        "Sign up (centered)",
        "Sign in (illustration)",
        "Sign up (illustration)",
        "Reset password",
        "Update password",
        "Verify",
        "404 error",
        "500 error",
        "Maintenance",
        "Coming soon",
        "Pricing cards",
        "Pricing columns",
        "Payment",
        "Support",
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "white", pt: 10, pb: 5, borderTop: "1px solid #eee" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              ZONE
              <Box component="span" sx={{ color: "orange" }}>
                .
              </Box>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 300 }}
            >
              The starting point for your next project based on
              easy-to-customize Material-UI © helps you build apps faster and
              better.
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Community
            </Typography>
            <Stack spacing={1} sx={{ mb: 4 }}>
              {["Documentation", "Changelog", "Contributing"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  color="text.secondary"
                  variant="body2"
                >
                  {text}
                </Link>
              ))}
            </Stack>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Let’s stay in touch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Subscribe to our newsletter to receive latest articles to your
              inbox weekly.
            </Typography>

            {/* Obuna bo'lish formasi */}
            <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
              <TextField
                placeholder="Email address"
                size="small"
                fullWidth
                sx={{ bgcolor: "#f4f4f4", "& fieldset": { border: "none" } }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1C252E",
                  color: "white",
                  textTransform: "none",
                  px: 3,
                }}
              >
                Subscribe
              </Button>
            </Stack>

            {/* Social Ikonkalar */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Social
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
              <IconButton size="small" sx={{ color: "#1877F2" }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ color: "#E4405F" }}>
                <Instagram />
              </IconButton>
              <IconButton size="small" sx={{ color: "#0077B5" }}>
                <LinkedIn />
              </IconButton>
              <IconButton size="small" sx={{ color: "#000" }}>
                <X />
              </IconButton>
            </Stack>

            {/* App yuklab olish tugmalari */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Apps
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<AppleIcon />}
                sx={{
                  bgcolor: "black",
                  borderRadius: 2,
                  textTransform: "none",
                  py: 1,
                }}
              >
                <Box textAlign="left">
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontSize: 8 }}
                  >
                    Download on the
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    Apple Store
                  </Typography>
                </Box>
              </Button>
              <Button
                variant="contained"
                startIcon={<PlayArrowIcon />}
                sx={{
                  bgcolor: "black",
                  borderRadius: 2,
                  textTransform: "none",
                  py: 1,
                }}
              >
                <Box textAlign="left">
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontSize: 8 }}
                  >
                    Download from
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    Google Play
                  </Typography>
                </Box>
              </Button>
            </Stack>
          </Grid>

          {/* O'ng taraf: Menyu ustunlari */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              {menuSections.map((section) => (
                <Grid size={{ xs: 6, sm: 4, md: 2 }} key={section.title}>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    {section.title}
                  </Typography>
                  <Stack spacing={1}>
                    {section.links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        underline="none"
                        color="text.secondary"
                        variant="caption"
                        sx={{
                          "&:hover": {
                            color: "black",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
