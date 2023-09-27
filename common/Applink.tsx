import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/system";
import style from "./style.module.scss";

type Appprops = {
  link: string;
  children: string | React.ReactNode;
  title: string;
};

const Applink: React.FC<Partial<Appprops>> = (props) => {
  const theme = useTheme();

  return (
    <Link
      title={props.title}
      href={props.link ? props.link : "/"}
      className={style.link}
    >
      {props.children}
    </Link>
  );
};

export default Applink;
