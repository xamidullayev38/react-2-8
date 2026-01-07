import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Link,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Burger icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "@emotion/styled";

// --- Sizning Styled Komponentlaringiz (o'zgarishsiz qoladi) ---
const ButtonPurchase = styled.button`
  position: relative;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(180deg, #0b1220, #020617);
  border-radius: 14px;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 14px;
    background: linear-gradient(135deg, #facc15, #f97316, #9333ea);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 18px;
    background: linear-gradient(135deg, #facc15, #f97316, #9333ea);
    filter: blur(18px);
    opacity: 0.35;
    z-index: -2;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;

const RotatingSettingsIcon = styled(SettingsIcon)`
  animation: spin 8s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Planshet va telefonda true bo'ladi

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#161C24",
        height: "100%",
        color: "white",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        ZONE.
      </Typography>
      <List>
        {["Home", "Components", "Pages", "Docs"].map((text) => (
          <ListItem button key={text} onClick={handleDrawerToggle}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(22, 28, 36, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: 24,
                fontWeight: 800,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Zone{" "}
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: "#f97316",
                  borderRadius: "50%",
                }}
              />
            </Link>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
              }}
            >
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Components</NavLink>
              <Button
                sx={{ textTransform: "none", color: "white" }}
                endIcon={<ArrowDropDownIcon />}
              >
                Pages
              </Button>
              <NavLink href="#">Docs</NavLink>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <SearchIcon />
              </IconButton>

              <Box
                component="img"
                src="https://flagcdn.com/w20/gb.png"
                alt="EN"
                sx={{ width: 20, height: 14, cursor: "pointer", mx: 1 }}
              />

              <IconButton sx={{ color: "white" }}>
                <RotatingSettingsIcon />
              </IconButton>

              <ButtonPurchase
                sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
              >
                Purchase
              </ButtonPurchase>

              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { bgcolor: "#161C24" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
