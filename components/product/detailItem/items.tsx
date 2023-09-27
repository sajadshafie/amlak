import React from "react";
type detailType = {
  label: string;
  value: string;
  is_price?: boolean;
  id: number;
};
const DetailItems: detailType[] = [
  {
    label: "نوع ملک",
    value: "اداری",
    id: 1,
  },
  {
    label: "متراژ",
    value: "400 متر",
    id: 2,
  },
  {
    label: "شماره شناسه",
    value: "544688",
    id: 3,
  },
  {
    label: "شماره سند",
    value: "9889432",
    id: 4,
  },
  {
    label: "نوع قرارداد",
    value: "اجاره ای",
    id: 5,
  },
  {
    label: "پیش پرداخت",
    value: "100 میلیون تومان",
    id: 6,
  },
  {
    label: "اجاره ماهانه",
    value: "30 میلیون تومان",
    id: 7,
  },
  {
    label: "قیمت",
    value: "1.6 میلیارد تومان",
    id: 8,
    is_price: true,
  },
];

export default DetailItems;
