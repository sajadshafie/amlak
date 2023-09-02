import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import AppTextValidator from "@/libs/AppTextvalidator";

type formType = {
  username: string;
  password: string;
};

const Loginform: React.FC = () => {
  const [form, setForm] = useState<formType>({
    username: "",
    password: "",
  });
  const handleSubmit = () => {};
  const onError = (err: any) => {
    console.log(err);
  };

  const onChangeForm = (value: string, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef("form");
  return (
    <Grid>
      <ValidatorForm ref={refForm} onSubmit={handleSubmit} onError={onError}>
        <AppTextValidator
          label={"نام کاربری"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "username")
          }
          validators={require}
          errorMessages={errMessage}
          value={form.username}
        />
        <AppTextValidator
          validators={require}
          errorMessages={errMessage}
          label={"رمز عبور"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "password")
          }
          value={form.password}
        />
        <Appbutton type="submit" variant="contained">
          ورود
        </Appbutton>
      </ValidatorForm>
    </Grid>
  );
};

export default Loginform;
