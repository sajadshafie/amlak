import AuthLayout from "@/Layout/authLayout";
import Forgotpassword from "@/components/UserAuth/Forgotpass";
import React from "react";

const index = (): JSX.Element => {
  return (
    <AuthLayout
      title="تغییر رمز عبور"
      sub_title="برای تغییر رمز عبور شماره معتبر وارد کنید"
    >
      <Forgotpassword />
    </AuthLayout>
  );
};

export default index;
