import { Grid } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Main from "@/Layout/main";
import Carousel from "@/libs/Carousel";
import Appimage from "@/common/Appimage";

const Product: React.FC = () => {
  const router = useRouter();

  const images: React.ReactNode[] = [
    <Grid height={"400px"}>
      <Appimage src="/images/house/house1.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house2.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house3.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house4.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house5.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house6.jpeg" fill />
    </Grid>,
    <Grid height={"400px"}>
      <Appimage src="/images/house/house7.jpeg" fill />
    </Grid>,
  ];

  return (
    <Main active={5}>
      <Grid container>
        <Grid item md={5.9} xs={12}></Grid>
        <Grid item md={5.9} xs={12}>
          <Carousel
            slidesToShow={1}
            dots={true}
            infinite={true}
            speed={500}
            slidesToScroll={1}
            data={images}
          />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Product;
