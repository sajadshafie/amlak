import React, { ReactNode } from "react";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
type ButtonVariant = "text" | "outlined" | "contained";

interface Props {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  loading: boolean;
  sx: object | React.CSSProperties;
  variant: string | ButtonVariant;
  color: string;
  fullWidth: boolean;
  disabled: boolean;
  ariadescribedby: any;
  textVariant: string;
}

const Appbutton: React.FC<Partial<Props>> = (props) => {
  return (
    <Button
      aria-describedby={props.ariadescribedby}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      variant={props.variant}
      // color={props.color}
      style={{ textTransform: "none" }}
      sx={props.sx}
      onClick={props.onClick}
      type={props.type}
    >
      <Typography
        variant={props.textVariant ? props.textVariant : "h6"}
        sx={{ color: props.variant == "contained" ? "white" : "#013a63" }}
      >
        {props.children}
      </Typography>
      {props.loading && <CircularProgress size={26} />}
    </Button>
  );
};

export default Appbutton;
