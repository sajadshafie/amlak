import React from "react";
import { Grid } from "@mui/material";
import Appimage from "@/common/Appimage";
import carouselTypes from "@/types/carouselType";

const productImageSub: carouselTypes[] = [
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house1.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 1,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house2.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 3,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house3.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 3,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house4.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 4,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house5.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 5,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house6.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 6,
  },
  {
    element: (
      <Grid height={"100px"}>
        <Appimage
          src="/images/house/house7.jpeg"
          fill
          className="border_radius12"
        />
      </Grid>
    ),
    id: 7,
  },
];

export { productImageSub };
