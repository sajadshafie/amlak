import ProviderLayout from "@/Layout/providerLayout";
import React from "react";
import AppTable from "@/common/Apptable/AppTable";
import MessageCard from "@/libs/Messagecard";
const provider = (): JSX.Element => {
  const titles = ["نوع زمین", "متراژ", "منطقه", "قیمت هر متر"];
  const data = [
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
    },
    {
      header1: "ساخت ساز",
      header2: "۱۵۰۰",
      header3: "",
      header4: "۲۳ میلیون",
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
    },
  ];
  return (
    <ProviderLayout active={1}>
      <MessageCard
        title="زمین "
        backgroundColor2="#8ecae6"
        backgroundColor="#a8dadc"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با "
        imageSrc="/images/city.jpeg"
        imageHeight="220px"
        buttonText="افزودن ملک جدید"
      />
      <AppTable rows={data} lables={titles} />
    </ProviderLayout>
  );
};

export default provider;
