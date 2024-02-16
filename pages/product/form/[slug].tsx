import React from "react";
import FormPurchase from "@/components/product/purchaseForm/form";
import { Grid } from "@mui/material";
import PurchaseDetail from "@/components/product/purchaseForm/detail";
import Main from "@/Layout/main";

const form: React.FC = () => {
  return (
    <Main active={5}>
      <Grid container alignItems={"flex-start"}>
        <Grid xs={12} lg={3} md={4} sm={6}>
          <PurchaseDetail />
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={8}>
          <FormPurchase />
        </Grid>
      </Grid>
    </Main>
  );
};

export default form;
