import React from "react";
import style from "./style.module.scss";

type propsType = {
  row: number;
  cols: number;
  placeholder: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AppTextArea: React.FC<Partial<propsType>> = (props) => {
  return (
    <textarea
      rows={props.row}
      cols={props.cols}
      className={style.text_area}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default AppTextArea;
