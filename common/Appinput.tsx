import React from "react";
import { TextField, styled } from "@mui/material";

type Props = {
  label: string;
  variant: "standard" | "outlined" | "filled";
  value: string;
  onChange: () => void;
  sx: React.CSSProperties | object;
};
const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    right: 30,
    textAlign: "right",
  },
  "& .MuiInputLabel-shrink": {
    position: "absolute",
    right: 30,
    top: "-3px",
    background: "white",
    width: "fit-content",
    padding: "0 5px",
    transformOrigin: "top right",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& legend ": {
      display: "none",
    },
  },
});

const Appinput: React.FC<Partial<Props>> = (props) => {
  return (
    <StyledTextField
      size="small"
      id="outlined-basic"
      label={props.label}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={{
        ...props.sx,
      }}
    />
  );
};

export default Appinput;
