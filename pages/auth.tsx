import AuthLayout from "@/Layout/authLayout";
import AuthForm from "@/components/UserAuth/Auth";
import React from "react";
import { step_auth_register } from "@/global";
const Auth = (): JSX.Element => {
  return (
    <AuthLayout
      link="/register"
      text_sub_register="آیا قبلا ثبت نام نکرده اید ؟"
      text_is_register="ثبت نام"
      title="تایید اهراز هویت"
      sub_title="لطفااطلاعات زیر را تکمیل کنید هدف از وارد کردن این اطلاعات به وجود اوردن امنیت ومطمعن شدن از معاملات است."
      stepNumber={2}
      step={step_auth_register}
    >
      <AuthForm />
    </AuthLayout>
  );
};

export default Auth;
