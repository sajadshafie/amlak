import { Grid } from "@mui/material";
import React from "react";
import { productImageSub } from "../CarouselItems/sub_carouselItems";
import Carousel from "@/libs/Carousel";

const SmallCarousel: React.FC<{
  onClickItem: Function;
  activeIndex: number;
}> = (props) => {
  return (
    <Grid>
      <Carousel
        haveArrow
        data={productImageSub}
        slidesToShow={4}
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
