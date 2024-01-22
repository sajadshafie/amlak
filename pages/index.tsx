import React, { useContext, useEffect, useState } from "react";
import Main from "@/Layout/main";
import Iconbox from "@/components/Home/Iconbox";
import Carousel from "@/libs/Carousel";
import AdverImage from "@/components/Home/AdverImage";
import { Grid, Typography, useTheme } from "@mui/material";
import Product from "@/components/Home/product";
import Whymehr from "@/components/Home/Whymehr";
import { CityItems, iconbox_items } from "@/components/Home/Icon_city_items";
import { context } from "@/context";
import api from "@/config/api";
import ProccessLoading from "@/libs/processloading";
import { adviserType } from "@/types/addvertise";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Applink from "@/common/Applink";

type iconBox = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const Home = (): JSX.Element => {
  const { state, setState } = useContext(context);
  const [process, setProcess] = useState<"loading" | "data" | "error">(
    "loading"
  );
  const [advertising, setAdvertising] = useState<adviserType[]>([]);
  const theme = useTheme();
  const getData = async () => {
    setProcess("loading");
    api
      .getAdvertiseList()
      .then(async (res) => {
        setProcess("data");
        // console.log(res);
        await setAdvertising(res.data.result);
      })
      .catch((err) => {
        setProcess("error");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Main active={1}>
        <AdverImage ImageSrc="/images/city2.jpg" search />
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
              margin: "50px auto",
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
          <Grid sx={{ margin: "160px auto 0 auto" }}>
            <ProccessLoading process={process} onCallBack={() => getData()}>
              <Product data={advertising} title="لیست ملک های جدید" />
            </ProccessLoading>
          </Grid>
          <Grid display={"flex"} justifyContent={"center"} width={"100%"}>
            <Applink link="/viewall">
              مشاهده همه
              <KeyboardBackspaceIcon sx={{ fontSize: "18px" }} />
            </Applink>
          </Grid>
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
            container
            justifyContent={"space-between"}
            display={"flex"}
            sx={{
              width: { md: "70%", xs: "95%" },
            }}
          >
            {iconbox_items.map((v: iconBox, i: number) => {
              return (
                <Grid
                  key={i}
                  item
                  md={3.8}
                  sm={12}
                  sx={{ mb: { sm: 8, md: 0, xs: 8 } }}
                >
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
