import React from "react";
import { Grid } from "@mui/material";
import Appimage from "@/common/Appimage";

const productImage: React.ReactNode[] = [
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house1.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house2.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house3.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house4.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house5.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house6.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
  <Grid height={"400px"}>
    <Appimage
      src="/images/house/house7.jpeg"
      fill
      className="border_radius12"
    />
  </Grid>,
];

export { productImage };
