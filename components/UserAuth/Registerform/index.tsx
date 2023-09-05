import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
import AppSelectValidator from "@/libs/AppSelectValidator";
import { city } from "@/global/city";
import { formType } from "@/types/authType";

type propsType = {
  onSubmit: (form: formType) => void;
};

const Registerform: React.FC<Partial<propsType>> = (props) => {
  const [form, setForm] = useState<formType>({
    phone_number: "",
    name_family: "",
    re_password: "",
    password: "",
    code_national: null,
    city: "",
    address: "",
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

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      console.log(value);
      if (value !== form.password) {
        return false;
      } else {
        return true;
      }
    });
  });

  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          type="number"
          fullWidth
          label={"شماره موبایل*"}
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
          label={"کد ملی*"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "code_national")
          }
          value={form.code_national}
        />
      </Grid>
      <Grid mb={2}>
        <AppSelectValidator
          variant="outlined"
          sx={{ width: "100%" }}
          fullWidth
          validators={require}
          errorMessages={errMessage}
          label={"شهر*"}
          options={city}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "city")
          }
          value={form.city}
        />
      </Grid>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          validators={require}
          errorMessages={errMessage}
          label={"آدرس "}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "address")
          }
          value={form.address}
        />
      </Grid>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          type={"password"}
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
          type={"password"}
          fullWidth
          validators={require}
          errorMessages={["required", "isPasswordMatch"]}
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
          ثبت و ارسال کد
        </Appbutton>
        <Applink
          link="/forgotpassword"
          text="رمز عبور خود را فراموش کرده اید؟"
        />
      </Grid>
    </ValidatorForm>
  );
};

export default Registerform;
