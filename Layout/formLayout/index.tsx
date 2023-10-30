import Appbutton from "@/common/Appbutton";
import React from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { Grid } from "@mui/material";

type propsTypes = {
  submitText: string | undefined;
  cancelText: string | undefined;
  onClose: () => void;
  children: boolean;
  onSubmit: () => void;
  loading: boolean;
};

const FormLayout: React.FC<Partial<propsTypes>> = (props) => {
  const refForm = React.useRef<any>("form");
  return (
    <ValidatorForm
      ref={refForm}
      onSubmit={props.onSubmit ? props.onSubmit : () => {}}
    >
      {props.children}
      <Grid container justifyContent={"flex-end"}>
        {props.cancelText && (
          <Appbutton sx={{ ml: 2 }} variant="outlined" onClick={props.onClose}>
            {props.cancelText}
          </Appbutton>
        )}
        {props.submitText && (
          <Appbutton loading={props.loading} variant="contained" type="submit">
            {props.submitText}
          </Appbutton>
        )}
      </Grid>
    </ValidatorForm>
  );
};

export default FormLayout;
