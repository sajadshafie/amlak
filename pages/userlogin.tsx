import React from "react";
import Userlogin from "@/components/UserAuth/Loginform";
import AuthLayout from "@/Layout/authLayout";
const index = (): JSX.Element => {
  return (
    <AuthLayout
      title="ورود کاربر"
      sub_title=" ورود به مشاور املاک انلاین"
      description="لطفا اطلاعات خود را وارد کنید"
    >
      <Userlogin />
    </AuthLayout>
  );
};

export default index;
