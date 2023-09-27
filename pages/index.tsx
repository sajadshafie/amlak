import React, { useContext } from "react";
import Main from "@/Layout/main";
import Iconbox from "@/components/Home/Iconbox";
import Carousel from "@/libs/Carousel";
import AdverImage from "@/components/Home/AdverImage";
import { Grid, Typography, useTheme } from "@mui/material";
import Product from "@/components/Home/product";
import Whymehr from "@/components/Home/Whymehr";
import { CityItems, iconbox_items } from "@/components/Home/Icon_city_items";
import { context } from "@/context";
type iconBox = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const Home = (): JSX.Element => {
  const theme = useTheme();
  const { state } = useContext(context);
  return (
    <>
      <Main active={1}>
        <AdverImage ImageSrc="/images/city.jpeg" search />
        <Grid
          sx={{
            maxWidth: state.maxWidth,
            margin: state.margin,
            px: state.px,
          }}
        >
          <Whymehr />
        </Grid>

        <Grid
          mt={"200px"}
          sx={{
            maxWidth: "100%",
            backgroundColor: `${theme.palette.primary.main}`,
            // "linear-gradient(#f9fdfd,#ddf0f2)"
            p: 5,
            pb: 10,
          }}
        >
          <Typography textAlign={"center"} variant="h3" color={"white"}>
            شهر های دارای ملک
          </Typography>
          <Grid
            sx={{
              maxWidth: state.maxWidth,
              margin: '100px auto',
            }}
          >
            <Carousel
              slidesToShow={3}
              dots={true}
              infinite={true}
              speed={500}
              slidesToScroll={1}
              data={CityItems}
            />
          </Grid>
        </Grid>
        <Grid
          mt={"200px"}
          sx={{
            px: { xs: 2, md: 4 },
          }}
        >
          <Product />
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          sx={{
            maxWidth: state.maxWidth,
            margin: state.margin,
          }}
        >
          <Grid
            item
            justifyContent={"space-between"}
            display={"flex"}
            sx={{
              width: { md: "70%", xs: "100%" },
            }}
          >
            {iconbox_items.map((v: iconBox, i: number) => {
              return (
                <Grid key={i} item md={3.8} sm={12}>
                  <Iconbox
                    title={v.title}
                    icon={v.icon}
                    description={v.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Home;
