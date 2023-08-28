import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Applink from "@/common/Applink";
type App = {
  icon: string;
  title: string;
  description: string;
};

const Iconbox: React.FC<Partial<App>> = (props) => {
  const theme = useTheme();
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
      <Grid
        mt={2}
        display={"flex"}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Applink link="/" text="مشاهده بیشتر" />

        <KeyboardBackspaceIcon
          sx={{ color: theme.palette.primary.yellow, fontSize: 18, mr: 1 }}
        />
      </Grid>
    </Grid>
  );
};

export default Iconbox;
