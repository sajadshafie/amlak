import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography } from "@mui/material";
type App = {
  icon: string;
  title: string;
  description: string;
};

const Iconbox: React.FC<Partial<App>> = (props) => {
  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid height={"50px"} width={"50px"}>
        <Appimage alt="/" src={props.icon} />
      </Grid>
      <Typography variant="h4" my={2}>
        {props.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle2">
        {props.description}
      </Typography>
    </Grid>
  );
};

export default Iconbox;
