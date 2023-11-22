import { Grid, Typography } from "@mui/material";
import React from "react";
import global from "@/global";
type detailType = {
  label: string;
  value: string | number;
  is_price: boolean;
  id: number;
};

const Detailitem: React.FC<Partial<detailType>> = (props) => {
  return (
    <Grid container justifyContent={"space-between"}>
      <Typography
        variant={!props.is_price ? "caption" : "body1"}
        sx={{ fontSize: 14 }}
      >
        {global.convertLangueg(props.label)}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 14 }}>
        {props.value}
      </Typography>
    </Grid>
  );
};

export default Detailitem;
