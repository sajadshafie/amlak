import React from "react";
import Main from "@/Layout/main";
import Iconbox from "@/components/Iconbox";
import Carousel from "@/libs/Carousel";
import AdverImage from "@/components/AdverImage";
import { Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import ImageHover from "@/components/main/imageHover";

type iconBox = {
  title: string;
  description: string;
  icon: string;
};

const Home = (): JSX.Element => {
  const theme = useTheme();

  const Items: React.ReactNode[] = [
    <ImageHover
      image="/images/city/tehran.jpeg"
      label="تهران"
      description="بهترین نقاط شهر"
    />,
    <ImageHover
      image="/images/city/mashhad.webp"
      label="مشهد"
      description="بهترین زمین ها در اطراف شهر"
    />,
    <ImageHover
      image="/images/city/yazd.webp"
      label="یزد"
      description=" زمین های بزرگ برای ساخت ساز"
    />,
    <ImageHover
      image="/images/city/tabriz.jpeg"
      label="تبریز"
      description="املاک تجاری"
    />,
    <ImageHover
      image="/images/city/mashhad.webp"
      label="مشهد"
      description="بهترین زمین ها در اطراف شهر"
    />,
    <ImageHover
      image="/images/city2.jpeg"
      label="تهران"
      description="بهترین نقاط شهر"
    />,
    <ImageHover
      image="/images/city/tehran.jpeg"
      label="تهران"
      description="بهترین نقاط شهر"
    />,
  ];

  const iconbox_items: iconBox[] = [
    {
      title: "خرید فروش انلاین ملک",
      description:
        "ی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
      icon: "/images/support.png",
    },
    {
      title: "مشاوره انلاین",
      description:
        "ی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
      icon: "/images/support.png",
    },
    {
      title: "خدمات پس از فروش",
      description:
        "ی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
      icon: "/images/support.png",
    },
  ];

  return (
    <>
      <Main active={1}>
        <AdverImage ImageSrc="/images/city.jpeg" search />
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid
            mt={20}
            item
            justifyContent={"space-between"}
            display={"flex"}
            sx={{
              width: { md: "70%", xs: "100%" },
            }}
          >
            {iconbox_items.map((v: iconBox, i: number) => {
              return (
                <Grid item md={3.8} sm={12}>
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
        <Grid
          mt={20}
          sx={{
            backgroundImage: "linear-gradient(#f9fdfd,#ddf0f2)",
            p: 5,
            pb: 10,
          }}
        >
          <Typography textAlign={"center"} variant="h3">
            شهر های دارای ملک
          </Typography>
          <Grid mt={5}>
            <Carousel
              slidesToShow={3}
              dots={true}
              infinite={true}
              speed={500}
              slidesToScroll={1}
              data={Items}
            />
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default Home;
