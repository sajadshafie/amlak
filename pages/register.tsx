import AuthLayout from "@/Layout/authLayout";
import React, { useState } from "react";
import Registerform from "@/components/UserAuth/Registerform";
import global from "@/global";
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
    >
      <Registerform onSubmit={(form) => onSubmit(form, "register")} />
    </AuthLayout>
  );
};

export default Register;
