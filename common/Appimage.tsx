import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  fill: boolean;
  quality: number;
  style: React.CSSProperties;
  className: string;
};

const Appimage: React.FC<Partial<Props>> = (props) => {
  return (
    <Grid position={"relative"} sx={{ width: "100%", height: "100%" }}>
      <Image
        className={props.className}
        style={props.style}
        src={props.src}
        width={props.width}
        height={props.height}
        alt={"/"}
        // placeholder={"blur"}
        fill={true}
      />
    </Grid>
  );
};

export default Appimage;
