import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import Applink from "@/common/Applink";
type formType = {
  phone_number: string;
};

const Forgotpassword: React.FC = () => {
  const [form, setForm] = useState<formType>({
    phone_number: "",
  });
  const handleSubmit = () => {};
  const onError = (err: any) => {
    console.log(err);
  };

  const onChangeForm = (value: string, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmitForm = () => {};
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef<any>("form");
  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          label={"شماره همراه"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "phone_number")
          }
          type="number"
          validators={require}
          errorMessages={errMessage}
          value={form.phone_number}
        />
      </Grid>
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Appbutton type="submit" variant="contained">
          ارسال کد
        </Appbutton>
      </Grid>
    </ValidatorForm>
  );
};

export default Forgotpassword;
