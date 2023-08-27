import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography } from "@mui/material";
import style from "./style.module.scss";
type Props = {
  ImageSrc: string;
  title: string;
  sub_title: string;
};

const AdverImage: React.FC<Partial<Props>> = (props) => {
  return (
    <Grid sx={{ position: "relative" }}>
      <Grid sx={{ height: "400px" }}>
        <Appimage src={props.ImageSrc} alt="/" />
      </Grid>
      <Grid
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", mb: 2 }}>
          {props.title}
          <Typography className={style.line} sx={{ marginTop: 2 }} />
        </Typography>

        <Typography variant="h5" sx={{ color: "white" }}>
          {props.sub_title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdverImage;
