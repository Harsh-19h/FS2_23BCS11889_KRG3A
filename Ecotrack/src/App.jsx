import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Box, CircularProgress, Typography } from "@mui/material";

// Lazy load components for code splitting
const Login = React.lazy(() => import("./pages/login"));
const Logs = React.lazy(() => import("./pages/Logs"));
const DashboardLayout = React.lazy(() => import("./pages/DashboardLayout"));
const DashboardAnalytics = React.lazy(() => import("./pages/dashboardAnalytic"));
const DashboardSummary = React.lazy(() => import("./pages/DashboardSummary"));

const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
    }}
  >
    <CircularProgress />
    <Typography variant="body1" sx={{ mt: 2 }}>
      Loading...
    </Typography>
  </Box>
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/logs"
                  element={
                    <ProtectedRoute>
                      <Logs logs={[]} />
                    </ProtectedRoute>
                  }
                />
                <Route path="analytics" element={<DashboardAnalytics />} />
                <Route path="summary" element={<DashboardSummary />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
