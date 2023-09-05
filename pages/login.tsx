import React from "react";
import Userlogin from "@/components/UserAuth/Loginform";
import AuthLayout from "@/Layout/authLayout";

const index = (): JSX.Element => {
  return (
    <AuthLayout
      link="/register"
      text_sub_register="آیا قبلا ثبت نام نکرده اید ؟"
      text_is_register="ثبت نام"
      title="ورود به حساب کاربری"
      sub_title=" ورود به مشاور املاک انلاین"
      description="لطفا اطلاعات خود را وارد کنید"
    >
      <Userlogin />
    </AuthLayout>
  );
};

export default index;
