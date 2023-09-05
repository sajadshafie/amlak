import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
type formType = {
  confirm_code: string;
};

type propsType = {
  onSubmit: (e: formType) => void;
};

const ConfirmCode: React.FC<Partial<propsType>> = (props) => {
  const [form, setForm] = useState<formType>({
    confirm_code: "",
  });

  const onChangeForm = (value: string, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmitForm = () => {
    props.onSubmit && props.onSubmit(form);
  };
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef<any>("form");
  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          label={"کد تایید"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "confirm_code")
          }
          validators={require}
          errorMessages={errMessage}
          value={form.confirm_code}
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid>
          <Appbutton type="submit" variant="contained">
            ثبت نام
          </Appbutton>
        </Grid>
        <Applink
          link="/forgotpassword"
          text="رمز عبور خود را فراموش کرده اید؟"
        />
      </Grid>
    </ValidatorForm>
  );
};

export default ConfirmCode;
