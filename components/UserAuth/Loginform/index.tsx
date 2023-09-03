import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
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
  const onSubmitForm = () => {};
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef<any>("form");
  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          label={"نام کاربری"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "username")
          }
          validators={require}
          errorMessages={errMessage}
          value={form.username}
        />
      </Grid>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          validators={require}
          errorMessages={errMessage}
          label={"رمز عبور"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "password")
          }
          value={form.password}
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Appbutton type="submit" variant="contained">
          ورود
        </Appbutton>
        <Applink
          link="/forgotpassword"
          text="رمز عبور خود را فراموش کرده اید؟"
        />
      </Grid>
    </ValidatorForm>
  );
};

export default Loginform;
