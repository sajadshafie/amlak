import { Grid, useTheme } from "@mui/material";
import React from "react";
import ListItemApp from "./ListItem";
type propstype = {
  active: number;
  open: boolean;
};

const AppDrawer: React.FC<Partial<propstype>> = (props) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        width: props.open ? "250px" : "0px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
        p: props.open ? 1 : 0,
        mt: 2,
        transition: "0.2s",
        height: "85vh",
      }}
    >
      <ListItemApp open={props.open} active={props.active} />
    </Grid>
  );
};

export default AppDrawer;
