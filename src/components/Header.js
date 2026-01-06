import { AppBar, Button, Container, Link, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { darkBg } from "./color";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AbcIcon from "@mui/icons-material/Abc";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "@emotion/styled";

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

  transition: all 0.3s ease;
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

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? "rgba(22, 28, 36, 0.95)"
          : "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.1)"
          : "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s ease-in-out",
        color: scrolled ? "#fff" : "inherit",
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
            textTransform={"uppercase"}
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
            Zone
            <span
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#f97316",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </Link>
          <div className="d-flex align-items-center gap-3">
            <NavLink fontSize={18} href="#" color="inherit" underline="none">
              Home
            </NavLink>
            <NavLink fontSize={18} href="#" color="inherit" underline="none">
              Components
            </NavLink>
            <Button
              sx={{ textTransform: "none",color:'white' }}
              endIcon={<ArrowDropDownIcon />}
            >
              Pages
            </Button>
            <NavLink fontSize={18} href="#" color="inherit" underline="none">
              Docs
            </NavLink>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Button sx={{color:'white'}}>
              <SearchIcon />
            </Button>

            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="EN"
              style={{ width: 20, height: 14 }}
            />

            <Button  sx={{color:'white'}}>
              <RotatingSettingsIcon />
            </Button>

            <ButtonPurchase>Purchase</ButtonPurchase>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
