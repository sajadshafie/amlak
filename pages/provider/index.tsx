import ProviderLayout from "@/Layout/providerLayout";
import React, { useState } from "react";
import AppTable from "@/common/Apptable/AppTable";
import MessageCard from "@/libs/Messagecard";
import AppModal from "@/common/AppModal";
import FormAdd from "@/components/provider/Advertising/form";
import { adviserType } from "@/types/addvertise";
const provider = (): JSX.Element => {
  const titles = [
    "نوع زمین",
    "متراژ",
    "منطقه",
    "قیمت هر متر",
    "وضعیت",
    "تغییرات",
  ];
  const data = [
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
      status: {
        content: "تایید شده",
        type: "success",
      },
      button: [
        {
          title: "edit",
        },
        {
          title: "delete",
        },
      ],
    },
    {
      header1: "ساخت ساز",
      header2: "۱۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
      status: {
        content: "رد شده",
        type: "error",
      },
      button: [
        {
          title: "edit",
        },
        {
          title: "delete",
        },
      ],
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
      status: {
        content: "در حال انتظار",
        type: "disabled",
      },
      button: [
        {
          title: "edit",
        },
        {
          title: "delete",
        },
      ],
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
      status: {
        content: "در حال انتظار",
        type: "disabled",
      },
      button: [
        {
          title: "edit",
        },
        {
          title: "delete",
        },
      ],
    },
    {
      header1: "کشاورزی",
      header2: "۴۵۰۰",
      header3: "تهران - شهرری",
      header4: "۲۳ میلیون",
      status: {
        content: "در حال انتظار",
        type: "disabled",
      },
      button: [
        {
          title: "edit",
        },
        {
          title: "delete",
        },
      ],
    },
  ];
  const [form, setForm] = useState<adviserType>({
    location: "",
    type: "",
    status: "",
    meter: "",
    price_meter: "",
    total_price: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onAddition = () => {
    setIsOpen(true);
  };
  const onChangeForm = (val: string, type: string) => {
    setForm({
      ...form,
      [type]: val,
    });
  };
  const onSubmitForm = () => {
    setLoading(true);
  };
  return (
    <ProviderLayout active={1}>
      <FormAdd
        onChangeForm={onChangeForm}
        submitText="ثبت"
        cancelText="انصراف"
        form={form}
        open={isOpen}
        onSubmit={onSubmitForm}
        onClose={() => setIsOpen(false)}
        loading={loading}
      />
      <MessageCard
        title="آگهی ها"
        backgroundColor2="#8ecae6"
        backgroundColor="#a8dadc"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با "
        imageSrc="/images/city.jpeg"
        imageHeight="245px"
        buttonText="افزودن ملک جدید"
        buttonAction={onAddition}
      />
      <AppTable rows={data} lables={titles} buttonDotted={true} />
    </ProviderLayout>
  );
};

export default provider;
