import { adviserType } from "@/types/addvertise";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "../Carousel";
import global from "@/global";

const ViewCard: React.FC<adviserType> = (props) => {
  return (
    <Grid width={"100%"} p={1}>
      <Carousel
        height="150px"
        // onClickArrow={onClickArrow}
        slidesToShow={1}
        dots={true}
        infinite={true}
        speed={500}
        slidesToScroll={1}
        // ref={sliderRef}
        initialSlide={0}
        data={props.images}
      />
      <Grid>
        <Typography mb={1} variant="h5">
          {props.title}
        </Typography>
        <Typography mb={1} variant="h5">
          {global.documnetTypeHandler(props.documentType as number)}
        </Typography>
        <Typography mb={1} variant="h5">
          {props.meterage}متر
        </Typography>
        <Typography mb={1} variant="h5">
          {props.price} تومان
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ViewCard;
