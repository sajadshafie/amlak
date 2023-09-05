import AuthLayout from "@/Layout/authLayout";
import React, { useState } from "react";
import Registerform from "@/components/UserAuth/Registerform";
import { step_auth_register } from "@/global";
import { formType, confirmType } from "@/types/authType";
import ConfirmCode from "@/components/UserAuth/ConfirmCode";

const Register = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const onSubmit = (form: formType | confirmType, type: string) => {
    setActiveStep(1);
  };
  return (
    <AuthLayout
      link="/login"
      text_sub_register="ایا قبلا حساب کاربری ساخته اید؟"
      text_is_register="ورود به حساب کاربری"
      stepNumber={activeStep}
      title={activeStep == 0 ? "ثبت نام حساب کاربری" : "ثبت کد تایید"}
      sub_title={
        activeStep == 0
          ? "لطفا اطلاعات خواسته شده را تکمیل و بعد از ثبت آن منتطر ارسال کد پیامکی بمانید."
          : "لطفا کد پیامک شده به شماره موبایل ۱۲۳۴۵۶۷۸۹ را وارد کنید."
      }
      step={step_auth_register}
    >
      {activeStep == 0 ? (
        <Registerform onSubmit={(form) => onSubmit(form, "register")} />
      ) : (
        <ConfirmCode onSubmit={(form) => onSubmit(form, "confirm")} />
      )}
    </AuthLayout>
  );
};

export default Register;
