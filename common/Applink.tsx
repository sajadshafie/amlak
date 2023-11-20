import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/system";
import style from "./style.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
type Appprops = {
  link: string | any;
  children: string | React.ReactNode;
  title: string;
  onClick: () => void;
};

const Applink: React.FC<Partial<Appprops>> = (props) => {
  const theme = useTheme();

  return (
    <Link
      onClick={props.onClick}
      title={props.title}
      href={props.link ? props.link : "/"}
      className={style.link}
    >
      {props.children}
    </Link>
  );
};

export default Applink;
