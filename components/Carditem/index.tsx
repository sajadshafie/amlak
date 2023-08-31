import { Grid, Typography } from "@mui/material";
import React from "react";
import productType from "@/types/product";
import Appimage from "@/common/Appimage";
import Appbutton from "@/common/Appbutton";
import style from "./style.module.scss";
import Likedbox from "./Likedbox";
import AppTooltip from "@/libs/Tooltip";
const Carditem: React.FC<Partial<productType>> = (props) => {
  const hanldeLike = () => {};

  return (
    <Grid
      sx={{
        opacity: props.is_selled ? 0.6 : 1,
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        borderRadius: "12px",
        position: "relative",
      }}
      className={style.card_hover}
    >
      <Grid
        sx={{
          position: "absolute",
          top: "10px",
          right: "5px",
          zIndex: 500,
        }}
      >
        <AppTooltip title="افزودن به علاقه مندی">
          <Likedbox hanldeLike={hanldeLike} />
        </AppTooltip>
      </Grid>
      <Grid height={"150px"}>
        <Appimage
          style={{ borderRadius: "12px 12px 0 0 " }}
          src={props.image}
          alt="/"
        />
      </Grid>
      <Grid p={2}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5" mb={1}>
            {props.title}
          </Typography>
          <Typography variant="h5number">{props.meter}</Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"space-between"} mb={1}>
          <Typography variant="caption"> موقیت مکانی {props.city}</Typography>
          <Typography variant="caption">{props.type}</Typography>
        </Grid>
        <Typography variant="h5number" mb={2}>
          {Number(props.price).toLocaleString("fi-FI")} تومان
        </Typography>
        <Appbutton
          disabled={props.is_selled}
          fullWidth
          textVariant="h5"
          sx={{ borderRadius: 30, mt: 1 }}
          variant="outlined"
        >
          {props.is_selled ? "درحال معامله " : "مشاهده جزییات"}
        </Appbutton>
      </Grid>
    </Grid>
  );
};

export default Carditem;
