import React from "react";
import Appimage from "@/common/Appimage";
import { Grid, Typography } from "@mui/material";
import style from "./style.module.scss";
import Appbutton from "@/common/Appbutton";
type types = {
  image: string;
  label: string;
  description: string;
};

const ImageHover: React.FC<Partial<types>> = (props) => {
  return (
    <Grid
      sx={{ background: "white", p: 2, borderRadius: "20px", direction: "rtl" }}
    >
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
      <Typography variant="h4">{props.label}</Typography>
      <Typography variant="caption">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و از طراحان گرافیک است، چاپگرها و
      </Typography>
      <Grid mt={2}>
        <Appbutton
          textVariant="h5"
          variant="outlined"
          fullWidth
          sx={{ borderRadius: 100 }}
        >
          مشاهده همه
        </Appbutton>
      </Grid>
    </Grid>
  );
};

export default ImageHover;
