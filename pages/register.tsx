import AuthLayout from "@/Layout/authLayout";
import React from "react";
import Registerform from "@/components/UserAuth/Registerform";
const index = (): JSX.Element => {
  return (
    <AuthLayout
      title="ثبت نام کاربر"
      sub_title="ثبت نام خریدار در املاک انلاین"
    >
      <Registerform />
    </AuthLayout>
  );
};

export default index;
