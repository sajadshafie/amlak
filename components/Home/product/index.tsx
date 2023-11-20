import { Grid, Typography } from "@mui/material";
import React from "react";
import Carditem from "@/libs/Carditem";
import { adviserType } from "@/types/addvertise";

type propsType = {
  data: adviserType[];
  title: string;
};

const Product: React.FC<Partial<propsType>> = (props) => {
  return (
    <Grid
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "1536px",
        },
      }}
    >
      <Typography variant="h3" mb={4} textAlign={"center"}>
        {props.title}
      </Typography>
      <Grid container>
        {props.data?.map((v: adviserType, i: number) => {
          return (
            <Grid key={i} pl={2} pb={2} item lg={3} md={4} sm={6} xs={12}>
              <Carditem {...v} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Product;
