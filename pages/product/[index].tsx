import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import Main from "@/Layout/main";
import Carousel from "@/libs/Carousel";
import { productImage } from "@/components/product/CarouselItems";
import { context } from "@/context";
import Appbutton from "@/common/Appbutton";

const Product: React.FC = () => {
  const router = useRouter();
  const { state } = useContext(context);
  return (
    <Main active={5}>
      <Grid
        container
        sx={{
          maxWidth: state.maxWidth,
          px: state.px,
          margin: state.margin,
        }}
      >
        <Grid item md={5.9} xs={12}>
          <Typography variant="h3" mb={2}>
            ملک اداری مجهز به مبلمان
          </Typography>
          <Grid container mb={2}>
            <Typography variant="caption" ml={1} sx={{ fontSize: 15 }}>
              آکهی ثبت شده :
            </Typography>
          </Grid>
          <Grid container mb={2}>
            <Typography variant="caption" ml={1}>
              نام دفتر املاک :
            </Typography>
            <Typography variant="h6">تالار ملک</Typography>
          </Grid>
          <Grid container mb={2}>
            <Typography variant="caption" ml={1}>
              نام دفتر املاک :
            </Typography>
            <Typography variant="h6">تالار ملک</Typography>
          </Grid>
          <Grid>
            <Appbutton variant="contained" sx={{ ml: 2 }}>
              اطلاعات تماس
            </Appbutton>
            <Appbutton variant="outlined">درباره تالار ملک</Appbutton>
          </Grid>
        </Grid>

        <Grid item md={5.9} xs={12}>
          <Carousel
            slidesToShow={1}
            dots={true}
            infinite={true}
            speed={500}
            slidesToScroll={1}
            data={productImage}
          />
        </Grid>
      </Grid>
    </Main>
  );
};

export default Product;
