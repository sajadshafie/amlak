import React from "react";
import Main from "@/Layout/main";
import Iconbox from "@/components/Iconbox";
import Carousel from "@/libs/Carousel";
import AdverImage from "@/components/AdverImage";
import { Grid } from "@mui/material";

type iconBox = {
  title: string;
  description: string;
  icon: string;
};

const Home = (): JSX.Element => {
  const items: React.ReactNode[] = [
    <AdverImage
      ImageSrc="/images/city.jpeg"
      title="فروش بهترین و لوکس ترین اپارتمان ها"
      sub_title="طرف قرارداد با معتبرترین املاک کشور"
    />,
    <AdverImage
      ImageSrc="/images/city2.jpeg"
      title="پیش خرید ‍,رهن  ,اجاره ملک با تضمین"
      sub_title="دارای استعلام از تمام املاک موجود"
    />,
    <AdverImage
      ImageSrc="/images/farm.jpeg"
      title="خرید فروش انواع زمین های کشاورزی و زراعی"
      sub_title="فروش زمین کشاورزی در بهترین نقاط کشور"
    />,
    <AdverImage
      ImageSrc="/images/farm2.jpeg"
      title="فروش زمین های با مجوز ساخت و ساز"
      sub_title="همکاری در ساخت و مشاوره رایگان"
    />,
    <AdverImage
      ImageSrc="/images/vila.jpeg"
      title="فروش انواع ویلا و خانه ویلایی"
      sub_title="وجود خانه هایی با انواع متراژ"
    />,
  ];
  const iconbox_items: iconBox[] = [
    {
      title: "خرید فروش انلاین ملک",
      description:
        "و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
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
        <Carousel data={items} />
        <Grid mt={10} container justifyContent={"space-between"}>
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
      </Main>
    </>
  );
};

export default Home;
