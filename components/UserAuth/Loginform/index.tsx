import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
import api from "@/config/api";
import { toast } from "react-toastify";
import { Text } from "@/global/text";
import Cookies from "js-cookie";
type formType = {
  username: string;
  password: string;
};

const Loginform: React.FC = () => {
  const [form, setForm] = useState<formType>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify the content type as JSON
      // Add any other headers required by your API
    },
    body: JSON.stringify(form), // Convert the data to JSON string
  };

  const onSubmitForm = () => {
    setLoading(true);
    // fetch("http://api2.talaremelk.ir/api/User/Login", options)
    //   .then((response) => response.json()) // Parse the response as JSON
    //   .then((data) => {
    //     // Handle the response data
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occur during the request
    //     console.error("Error:", error);
    //   });
    api
      .login(form)
      .then((res) => {
        setForm({
          username: "",
          password: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(Text.errorLogin);
      });
  };
  const onError = (err: any) => {
    console.log(err);
  };

  const onChangeForm = (value: string, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef<any>("form");
  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          label={"شماره موبایل"}
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
          fullWidth
          validators={require}
          errorMessages={errMessage}
          label={"رمز عبور"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "password")
          }
          value={form.password}
          type="password"
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Appbutton loading={loading} type="submit" variant="contained">
          ورود
        </Appbutton>
        <Applink link="/forgotpassword">
          {"رمز عبور خود را فراموش کرده اید؟"}
        </Applink>
      </Grid>
    </ValidatorForm>
  );
};

export default Loginform;
