import { Grid, Typography } from "@mui/material";
import React from "react";
import productType from "@/types/product";
import Appimage from "@/common/Appimage";
import Appbutton from "@/common/Appbutton";
import style from "./style.module.scss";
import Likedbox from "./Likedbox";
import AppTooltip from "@/libs/Tooltip";
import { useRouter } from "next/router";
const Carditem: React.FC<Partial<productType>> = (props) => {
  const hanldeLike = () => {};
  const router = useRouter();
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
          top: "0px",
          right: "0px",
          zIndex: 500,
        }}
      >
        <AppTooltip title="افزودن به علاقه مندی">
          <Likedbox hanldeLike={hanldeLike} />
        </AppTooltip>
      </Grid>
      <Grid height={"250px"}>
        <Appimage
          style={{ borderRadius: "12px 12px 0 0 " }}
          src={props.image}
          alt="/"
        />
      </Grid>
      <Grid p={2}>
        <Grid display={"flex"} justifyContent={"space-between"} mb={1}>
          <Typography variant="h5" mb={1}>
            {props.title}
          </Typography>
          <Typography variant="h5number">{props.meter}</Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"space-between"} mb={2}>
          <Typography variant="caption"> موقیت مکانی {props.city}</Typography>
          <Typography variant="caption">{props.type}</Typography>
        </Grid>
        <Grid mb={2}>
          <Typography variant="h5number">
            {Number(props.price).toLocaleString("fi-FI")} تومان
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ width: { xs: "100%", sm: "50%" }, margin: "0 auto" }}
        >
          <Appbutton
            onClick={() => router.push("/product/test")}
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
    </Grid>
  );
};

export default Carditem;
