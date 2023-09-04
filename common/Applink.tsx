import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/system";
import style from "./style.module.scss";

type Appprops = {
  link: string;
  text: string | React.ReactNode;
};

const Applink: React.FC<Partial<Appprops>> = (props) => {
  const theme = useTheme();

  return (
    <Link href={props.link} className={style.link}>
      {props.text}
    </Link>
  );
};

export default Applink;
