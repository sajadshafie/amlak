import { Grid, Typography } from "@mui/material";
import React from "react";
import { product_item } from "./Items";
import productType from "@/types/product";
import Carditem from "@/components/Carditem";
const Product: React.FC = () => {
  return (
    <Grid>
      <Typography variant="h3" mb={4} textAlign={"center"}>
        لیست ملک های جدید
      </Typography>
      <Grid container spacing={2}>
        {product_item.map((v: productType, i: number) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <Carditem {...v} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Product;
