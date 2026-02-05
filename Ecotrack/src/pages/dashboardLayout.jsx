import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";

const DashboardLayout = React.memo(() => {
  const location = useLocation();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" color="inherit" href="/">
            Home
          </MuiLink>
          <Typography color="text.primary">Dashboard</Typography>
        </Breadcrumbs>
      </Box>

      <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant={location.pathname.includes("summary") ? "contained" : "outlined"}
            component={Link}
            to="summary"
          >
            Summary
          </Button>
          <Button
            variant={location.pathname.includes("analytics") ? "contained" : "outlined"}
            component={Link}
            to="analytics"
          >
            Analytics
          </Button>
        </Box>
      </Paper>

      <Outlet />
    </Container>
  );
});

export default DashboardLayout;
