import React, { ReactNode } from "react";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
type ButtonVariant = "text" | "outlined" | "contained";
export interface ButtonPropsVariantOverrides {}
interface Props {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: any;
  loading: boolean;
  sx: object | React.CSSProperties;
  variant: any;
  color: string;
  fullWidth: boolean;
  disabled: boolean;
  ariadescribedby: any;
  textVariant: any;
}

const Appbutton: React.FC<Partial<Props>> = (props) => {
  return (
    <Button
      aria-describedby={props.ariadescribedby}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      variant={props.variant}
      style={{ textTransform: "none" }}
      sx={{
        ...props.sx,
        py: 1.5,
      }}
      onClick={props.onClick}
      type={props.type}
    >
      <Typography
        variant={props.textVariant ? props.textVariant : "h6"}
        sx={{ color: props.variant == "contained" ? "white" : "#013a63" }}
      >
        {props.children}
      </Typography>
      {props.loading && (
        <CircularProgress size={18} sx={{ color: "white", mr: 1 }} />
      )}
    </Button>
  );
};

export default Appbutton;
