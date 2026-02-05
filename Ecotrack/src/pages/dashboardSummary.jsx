import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import AssessmentIcon from "@mui/icons-material/Assessment";

const DashboardSummary = React.memo(() => {
  const summaryData = [
    {
      title: "Total Activities",
      value: "3",
      icon: <AssessmentIcon />,
      color: "primary.main",
    },
    {
      title: "Car Travel",
      value: "4 units",
      icon: <DirectionsCarIcon />,
      color: "error.main",
    },
    {
      title: "Electricity Usage",
      value: "6 units",
      icon: <ElectricBoltIcon />,
      color: "warning.main",
    },
    {
      title: "Cycling",
      value: "0 units",
      icon: <DirectionsBikeIcon />,
      color: "success.main",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard Summary
      </Typography>
      <Grid container spacing={3}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography color="text.secondary" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: item.color }}>
                    {item.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default DashboardSummary;
