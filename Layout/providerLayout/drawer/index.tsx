import { Grid, useTheme } from "@mui/material";
import React from "react";
import ListItemApp from "./ListItem";
import style from "./style.module.scss";
type propsType = {
  open: boolean;
  active: number;
};

const AppDrawer: React.FC<Partial<propsType>> = (props) => {
  const theme = useTheme();

  return (
    <Grid
      className={props.open ? style.open_menu : style.close_menu}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
      }}
    >
      {props.open ? <ListItemApp active={props.active} /> : null}
    </Grid>
  );
};

export default AppDrawer;
