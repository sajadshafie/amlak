import React from "react";
import { TextField } from "@mui/material";

type Props = {
  label: string;
  variant: "standard" | "outlined" | "filled";
  value: string;
  onChange: () => void;
  sx: React.CSSProperties | object;
};

const Appinput: React.FC<Partial<Props>> = (props) => {
  return (
    <TextField
      id="outlined-basic"
      label={props.label}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={props.sx}
    />
  );
};

export default Appinput;
