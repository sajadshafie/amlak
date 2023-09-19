import React from "react";
import ImageHover from "../imageHover";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

type iconBox = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const CityItems: React.ReactNode[] = [
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
    icon: <AddHomeWorkOutlinedIcon sx={{ fontSize: 36 }} />,
  },
  {
    title: "مشاوره انلاین",
    description:
      "ی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
    icon: <DomainOutlinedIcon sx={{ fontSize: 36 }} />,
  },
  {
    title: "خدمات پس از فروش",
    description:
      "ی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام ",
    icon: <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 36 }} />,
  },
];

export { CityItems, iconbox_items };
