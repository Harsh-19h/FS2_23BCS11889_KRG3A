import React, { useMemo } from "react";
import { Typography, List, ListItem, ListItemText, Paper, Box } from "@mui/material";

const Logs = React.memo(({ logs }) => {
  const totalCarbon = useMemo(() => {
    return logs.reduce((total, log) => total + log.carbon, 0);
  }, [logs]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Activity Logs
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Total Carbon Footprint: {totalCarbon} units
      </Typography>
      <Paper elevation={2}>
        <List>
          {logs.map((log) => (
            <ListItem key={log.id} divider>
              <ListItemText
                primary={log.activity}
                secondary={`${log.carbon} carbon units`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Logs;
