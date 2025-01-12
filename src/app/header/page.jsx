"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import me from "@/app/images/me.jpg"
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    router.push("/login"); // Redirect to the login page
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" color="white" elevation={0}>
      <Toolbar>
        {/* Brand */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          EventManager
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <Button color="inherit" onClick={() => router.push("/allEvent")}>All Events</Button>
          <Button color="inherit" onClick={() => router.push("/myEvents")}>My Events</Button>
          <Button color="inherit" onClick={() => router.push("/createEvent")}>Create Event</Button> */}

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Profile Dropdown */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => router.push("/profile")}>Visit Profile</MenuItem>
          <MenuItem onClick={() => router.push("/allEvent")}>All Events</MenuItem>
          <MenuItem onClick={() => router.push("/myEvents")}>My Events</MenuItem>
          <MenuItem onClick={() => router.push("/createEvent")}>Create Event</MenuItem>
          <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>Logout</MenuItem>
        </Menu>
      </Toolbar>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.paper",
            padding: 2,
          }}
        >
          <Button color="inherit" onClick={() => router.push("/allEvent")}>All Events</Button>
          <Button color="inherit" onClick={() => router.push("/myEvents")}>My Events</Button>
          <Button color="inherit" onClick={() => router.push("/createEvent")}>Create Event</Button>
          <Button color="inherit" onClick={handleLogout} sx={{ textAlign: "left", color: "error.main" }}>Logout</Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
