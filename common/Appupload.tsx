import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type propsTypes = {
  onChange: (e: any) => void;
  label: string;
  sx: React.CSSProperties;
};
const InputFileUpload: React.FC<Partial<propsTypes>> = (props) => {
  return (
    <Button
      sx={props.sx}
      component="label"
      variant="outlined"
      startIcon={<CloudUploadIcon />}
    >
      <Typography mr={1} variant="h6">
        {props.label}
      </Typography>
      <VisuallyHiddenInput type="file" onChange={props.onChange} />
    </Button>
  );
};
export default InputFileUpload;
