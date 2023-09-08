import { Grid, Typography } from "@mui/material";
import React from "react";
import { product_item } from "./Items";
import productType from "@/types/product";
import Carditem from "@/libs/Carditem";
const Product: React.FC = () => {
  return (
    <Grid
      sx={{
        maxWidth: {
          xs: "100%",
          lg: "1536px",
          margin: "160px auto 0 auto",
        },
      }}
    >
      <Typography variant="h3" mb={4} textAlign={"center"}>
        لیست ملک های جدید
      </Typography>
      <Grid container>
        {product_item.map((v: productType, i: number) => {
          return (
            <Grid pl={2} pb={2} item md={3} sm={6} xs={12}>
              <Carditem {...v} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Product;
