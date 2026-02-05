import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Header = React.memo(() => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EcoTrack - Carbon Footprint Tracker
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            variant={location.pathname === "/" ? "outlined" : "text"}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/logs"
            variant={location.pathname === "/logs" ? "outlined" : "text"}
          >
            Logs
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            variant={location.pathname === "/login" ? "outlined" : "text"}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
