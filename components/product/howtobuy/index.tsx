import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ItemHow from "./items";
type propsType = {
  icon: React.ReactNode | null;
  label: string;
};

const Howtobuy: React.FC = () => {
  return (
    <Grid mt={10}>
      <Typography variant="h4" mb={2}>
        نحوه خرید از فروشگاه
      </Typography>
      {ItemHow.map((v: propsType, i: number) => {
        return (
          <Grid key={i}>
            <Grid display={"flex"} alignItems={"center"}>
              {v.icon && v.icon}
              <Typography mr={1} variant="h5">
                {v.label}
              </Typography>
            </Grid>
            <Divider sx={{ my: 2 }} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Howtobuy;
