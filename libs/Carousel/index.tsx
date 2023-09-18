import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import style from "./style.module.scss";
import Arrow from "./Arrow";
interface Props {
  data: ReactNode[];
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

const Carousel: React.FC<Partial<Props>> = (props) => {
  const ref = useRef<any>(null);
  const onClickSlide = (e: string) => {
    e == "prev" ? ref.current.slickPrev() : ref.current.slickNext();
  };
  const renderCustomDots = (dots: any) => {
    return (
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {dots.map((dot: any, index: number) => (
          <li
            key={index}
            style={{
              margin: "0 5px",
              listStyleType: "none",
              width: "10px", // Adjust the width of the dot
              height: "10px", // Adjust the height of the dot
              borderRadius: "50%", // Make the dot circular
              background: "red", // Change the background color of the dot
            }}
          >
            {dot}
          </li>
        ))}
      </ul>
    );
  };
  const settings = {
    dots: props.dots,
    infinite: props.infinite,
    speed: props.speed,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow handleClick={(e) => onClickSlide(e)} type={"prev"} />,
    nextArrow: <Arrow handleClick={(e) => onClickSlide(e)} type={"next"} />,
  };

  return (
    <Slider {...settings} ref={ref}>
      {props.data?.map((v: ReactNode, index: number) => {
        return (
          <div
            className={props.slidesToShow !== 1 ? style.container_item : ""}
            key={index}
          >
            {v}
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
