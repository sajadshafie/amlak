import { Grid, useTheme } from "@mui/material";
import React from "react";
import ListItemApp from "./ListItem";

const AppDrawer: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        width: "200px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
        p: 1,
      }}
    >
      <ListItemApp />
    </Grid>
  );
};

export default AppDrawer;
