import React from "react";

import Userlogin from "@/components/Userlogin";
import AuthLayout from "@/Layout/authLayout";
const index = (): JSX.Element => {
  return (
    <AuthLayout>
      <Userlogin />
    </AuthLayout>
  );
};

export default index;
