import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { ValidatorForm } from "react-material-ui-form-validator";
import { authType } from "@/types/authType";
import FileUpload from "@/common/Appupload";

type propsType = {
  onSubmit: (form: any) => void;
};

const AuthForm: React.FC<Partial<propsType>> = (props) => {
  const [form, setForm] = useState<authType>({
    sheba_number: null,
    name: "",
    number_certificate: null,
    image_national_card: "",
  });

  const onChangeForm = (value: string, type: string) => {
    setForm({
      ...form,
      [type]: value,
    });
  };
  const onSubmitForm = () => {
    props.onSubmit && props.onSubmit(form);
  };
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  const refForm = useRef<any>("form");

  return (
    <ValidatorForm ref={refForm} onSubmit={onSubmitForm}>
      <Grid mb={2}>
        <AppTextValidator
          type="number"
          fullWidth
          label={"شماره شبا*"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "sheba_number")
          }
          validators={require}
          errorMessages={errMessage}
          value={form.sheba_number}
        />
      </Grid>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          label={"نام مالک شماره شبا"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "name")
          }
          validators={require}
          errorMessages={errMessage}
          value={form.name}
        />
      </Grid>
      <Grid mb={2}>
        <AppTextValidator
          fullWidth
          validators={require}
          errorMessages={errMessage}
          label={"شماره شناسنامه"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeForm(e.target.value, "number_certificate")
          }
          value={form.number_certificate}
        />
      </Grid>

      <Grid mb={2}>
        <Typography
          variant="caption"
          sx={{ fontSize: "13px", display: "block" }}
          mb={1}
        >
          بارگذاری عکس کارت ملی
        </Typography>
        <FileUpload />
      </Grid>

      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Appbutton type="submit" variant="contained">
          ثبت نام
        </Appbutton>
      </Grid>
    </ValidatorForm>
  );
};

export default AuthForm;
