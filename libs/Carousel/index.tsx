import React, { ReactNode, useRef, ForwardedRef } from "react";
import Slider, { SliderRef } from "react-slick";
import style from "./style.module.scss";
import Arrow from "./Arrow";
import carouselTypes from "@/types/carouselType";

interface Props {
  data: any;
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  height: string;
  autoPlay: boolean;
  initialSlide: number;
  onClickItem: Function;
  classNameItem: any;
  activeIndex: number;
  isActiveMode: boolean;
  onClickArrow: (e: string) => void;
  haveArrow: boolean;
}

const Carousel: React.ForwardRefRenderFunction<SliderRef, Partial<Props>> = (
  props,
  ref
) => {
  const sliderRef = useRef<SliderRef>(null);
  const onClickSlide = (e: string) => {
    props.onClickArrow && props.onClickArrow(e);
    e == "prev"
      ? sliderRef.current?.slickPrev()
      : sliderRef.current?.slickNext();
  };

  const settings = {
    dots: props.dots,
    infinite: props.infinite,
    speed: props.speed,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplay: props.autoPlay,
    autoplaySpeed: 5000,
    prevArrow: props.haveArrow && (
      <Arrow handleClick={(e) => onClickSlide(e)} type={"prev"} />
    ),
    nextArrow: props.haveArrow && (
      <Arrow handleClick={(e) => onClickSlide(e)} type={"next"} />
    ),
    initialSlide: props.initialSlide,
  };

  return (
    <Slider {...settings} ref={ref || sliderRef}>
      {props.data?.map((v: any, index: number) => {
        return (
          <div
            onClick={() => props.onClickItem && props.onClickItem(v, index)}
            className={`${
              props.slidesToShow !== 1 ? style.container_item : ""
            } ${props.classNameItem} ${style.pos_rel}`}
            key={index}
          >
            {props.isActiveMode && props.activeIndex != index && (
              <div className={style.cover_diactive}></div>
            )}
            {v.element}
          </div>
        );
      })}
    </Slider>
  );
};

export default React.forwardRef<SliderRef, Partial<Props>>(Carousel);
