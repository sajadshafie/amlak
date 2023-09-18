import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Applink from "@/common/Applink";
type App = {
  icon: React.ReactNode;
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
        backgroundColor: theme.palette.primary.footer_bg,
        position: "relative",
        p: 2,
        borderRadius: "30px",
      }}
    >
      <Grid
        height={"50px"}
        width={"50px"}
        sx={{
          position: "absolute",
          backgroundColor: "white",
          borderColor: theme.palette.primary.yellow300,
          borderWidth: "1px",
          borderStyle: "solid",
          top: "-40px",
          borderRadius: "100%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.yellow300,
        }}
      >
        {props.icon}
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
