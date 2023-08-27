import React, { ReactNode } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
type Props = {
  data: ReactNode[];
};

const Carousel: React.FC<Partial<Props>> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
