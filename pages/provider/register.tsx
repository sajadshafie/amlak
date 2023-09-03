import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
import AuthLayout from "@/Layout/authLayout";
type formType = {
  username: string;
  password: string;
  re_password: string;
  phone_number: string;
  name_family: string;
};

const Registerform: React.FC = () => {
  const [form, setForm] = useState<formType>({
    username: "",
    password: "",
    re_password: "",
    phone_number: "",
    name_family: "",
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
    <AuthLayout
      title="ثبت نام فروشنده"
      sub_title="ثبت نام به عنوان بنگاه انلاین"
    >
      <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
        <Grid mb={2}>
          <AppTextValidator
            type={"text"}
            fullWidth
            label={"نام کاربری*"}
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
            type="number"
            fullWidth
            label={"شماره همراه*"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChangeForm(e.target.value, "phone_number")
            }
            validators={require}
            errorMessages={errMessage}
            value={form.phone_number}
          />
        </Grid>
        <Grid mb={2}>
          <AppTextValidator
            fullWidth
            label={"نام و نام خانوادگی*"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChangeForm(e.target.value, "name_family")
            }
            validators={require}
            errorMessages={errMessage}
            value={form.name_family}
          />
        </Grid>
        <Grid mb={2}>
          <AppTextValidator
            fullWidth
            validators={require}
            errorMessages={errMessage}
            label={"رمز عبور*"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChangeForm(e.target.value, "password")
            }
            value={form.password}
          />
        </Grid>
        <Grid mb={2}>
          <AppTextValidator
            fullWidth
            validators={require}
            errorMessages={errMessage}
            label={"تکرار رمز عبور*"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChangeForm(e.target.value, "re_password")
            }
            value={form.re_password}
          />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Appbutton type="submit" variant="contained">
            ارسال کد
          </Appbutton>
          <Applink
            link="/forgotpassword"
            text="رمز عبور خود را فراموش کرده اید؟"
          />
        </Grid>
      </ValidatorForm>
    </AuthLayout>
  );
};

export default Registerform;
