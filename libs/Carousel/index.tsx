import React, { ReactNode } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
interface Props {
  data: ReactNode[];
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const Carousel: React.FC<Partial<Props>> = (props) => {
  const settings = {
    dots: props.dots,
    infinite: props.infinite,
    speed: props.speed,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
  };
  return (
    <Slider {...settings}>
      {props.data?.map((v: ReactNode, index: number) => {
        return (
          <div className={style.container_item} key={index}>
            {v}
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
