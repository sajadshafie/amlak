import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useTheme } from "@mui/material";
type propsType = {
  icon: React.ReactNode | null;
  label: string;
};

const ItemHow: propsType[] = [
  {
    label: "امکان خرید به صورت اقساط",
    icon: <CreditScoreIcon color="disabled" />,
  },
  {
    label: "امکان مراجعه حضوری",
    icon: <EmojiEmotionsIcon color="disabled" />,
  },
  {
    label: "امکان استعلام از تمام ادارات ثبت اسناد",
    icon: <CreditScoreIcon color="disabled" />,
  },
  {
    label:
      "آدرس: تهران ،آزادگان،خلیج فارس،خیابان ابوسعید شرقی،خیابان حیدری،توحید15،پلاک44",
    icon: null,
  },
];

export default ItemHow;
