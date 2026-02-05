import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Avatar,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AssessmentIcon from "@mui/icons-material/Assessment";

const DashboardAnalytics = React.memo(() => {
  const analyticsData = [
    {
      title: "Carbon Reduction Trend",
      value: "+12%",
      description: "Compared to last month",
      icon: <TrendingUpIcon />,
      color: "success.main",
      progress: 75,
    },
    {
      title: "Activity Frequency",
      value: "8/week",
      description: "Average activities logged",
      icon: <AssessmentIcon />,
      color: "primary.main",
      progress: 60,
    },
    {
      title: "Goal Achievement",
      value: "85%",
      description: "Monthly carbon goal",
      icon: <TrendingDownIcon />,
      color: "warning.main",
      progress: 85,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Analytics Dashboard
      </Typography>
      <Grid container spacing={3}>
        {analyticsData.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography color="text.secondary" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: item.color }}>
                    {item.icon}
                  </Avatar>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={item.progress}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default DashboardAnalytics;
