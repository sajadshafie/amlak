import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography } from "@mui/material";
import style from "./style.module.scss";
type types = {
  image: string;
  label: string;
  description: string;
};

const ImageHover: React.FC<Partial<types>> = (props) => {
  return (
    <Grid sx={{ background: "white", p: 2, borderRadius: "12px" }}>
      <Grid height={"200px"} className={style.container} mb={2}>
        <Appimage alt="/" src={props.image} />
        <Grid className={style.show_content}>
          <Typography variant="h4" sx={{ color: "white" }} mb={2}>
            {props.label}
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ direction: "rtl" }} variant="h4">
        {props.label}
      </Typography>
    </Grid>
  );
};

export default ImageHover;
