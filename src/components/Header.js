import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function ButtonAppBar() {
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const openProfile = Boolean(anchorElProfile);

  const handleProfileOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfile(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" startIcon={<EmailIcon />}>
              Contact
            </Button>

            <Button color="inherit" startIcon={<SettingsIcon />}>
              Settings
            </Button>

            <Button
              color="inherit"
              startIcon={<PersonIcon />}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleProfileOpen}
            >
              Profile
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorElProfile}
        open={openProfile}
        onClose={handleProfileClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleProfileClose}>My account</MenuItem>
        <MenuItem onClick={handleProfileClose}>Log out</MenuItem>
      </Menu>
    </Box>
  );
}
