import { Grid, Typography } from "@mui/material";
import React from "react";
import global from "@/global";
import Appimage from "@/common/Appimage";
import Appbutton from "@/common/Appbutton";
import Applink from "@/common/Applink";
import style from "./style.module.scss";
import Likedbox from "./Likedbox";
import AppTooltip from "@/libs/Tooltip";
import { useRouter } from "next/router";
import { adviserType } from "@/types/addvertise";
import { imageURL } from "@/config/global";
const Carditem: React.FC<Partial<adviserType>> = (props) => {
  const hanldeLike = () => {};
  const router = useRouter();
  const ss = typeof props.images == "string" ? props.images.split(",") : [];
  const main = ss.find((v: string) => v.includes("main"));
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
      <Grid height={"200px"}>
        <Appimage
          style={{ borderRadius: "12px 12px 0 0 " }}
          src={main?.length >= 1 ? imageURL + main : "/"}
          alt="/"
        />
      </Grid>
      <Grid p={2}>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h5" mb={1}>
            {props.title}
          </Typography>
          <Typography fontWeight={"400"} variant="h5number">
            {props.meterage.toLocaleString("fi-FI")} متر
          </Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography variant="caption"> موقیت مکانی تهران</Typography>
          <Typography variant="h5">
            نوع سند {global.documnetTypeHandler(props.documentType)}
          </Typography>
        </Grid>
        <Grid mb={2}>
          <Typography variant="h5number" fontWeight={"600"}>
            {Number(props.price).toLocaleString("fi-FI")} تومان
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ width: { xs: "100%", sm: "80%", md: "60%" }, margin: "0 auto" }}
        >
          {/* <Appbutton
            onClick={() =>
              router.push({
                pathname: `/product/[slug]`,
                query: { slug: props.id },
              })
            }
            disabled={props.is_selled}
            fullWidth
            textVariant="h5"
            sx={{ borderRadius: 30, mt: 1 }}
            variant="outlined"
          >
            {props.is_selled ? "درحال معامله " : "مشاهده جزییات"}
          </Appbutton> */}
          <Applink link={`/product/${props.id}`}>
            {props.is_selled ? "درحال معامله " : "مشاهده جزییات"}
          </Applink>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Carditem;
