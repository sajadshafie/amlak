import { Grid } from "@mui/material";
import React from "react";
import { productImageSub } from "../CarouselItems/sub_carouselItems";
import Carousel from "@/libs/Carousel";

type propsType = {
  onClickItem: Function;
  activeIndex: number;
  data: any[];
};

const SmallCarousel: React.FC<Partial<propsType>> = (props) => {
  return (
    <Grid>
      <Carousel
        height="150px"
        haveArrow
        data={props.data}
        slidesToShow={props.data?.length >= 1 ? 2 : 1}
        dots={false}
        infinite={true}
        speed={500}
        slidesToScroll={1}
        onClickItem={props.onClickItem}
        isActiveMode
        activeIndex={props.activeIndex}
        initialSlide={0}
      />
    </Grid>
  );
};

export default SmallCarousel;
