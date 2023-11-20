import AppModal from "@/common/AppModal";
import React from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { Grid, Typography } from "@mui/material";
import FormLayout from "@/Layout/formLayout";
import { adviserType } from "@/types/addvertise";
import AppTextArea from "@/common/Apptextarea";
import global from "@/global";
import InputFileUpload from "@/common/Appupload";
import Appimage from "@/common/Appimage";
import Imageuploaded from "@/libs/imageuploaded";
import Appselect from "@/common/Appselect";
type formTypes = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onChangeForm: (value: string, type: string) => void;
  form: adviserType;
  submitText: string;
  cancelText: string;
  loading: boolean;
  onUploadImage: (e: any) => void;
  onRemoveImage: (v: any, index: number) => void;
};

const optionCategory = [
  {
    value: 0,
    label: "نامشخص",
  },
  {
    value: 1,
    label: "زمین",
  },
  {
    value: 2,
    label: "آپارتمان",
  },
];

const FormAdd: React.FC<Partial<formTypes>> = (props) => {
  const refForm = React.useRef<any>("form");
  const errMessage: string[] = ["این فیلد نمیتواند خالی باشد"];
  const require: string[] = ["required"];
  return (
    <AppModal open={props.open} onClose={props.onClose}>
      <FormLayout
        loading={props.loading}
        submitText={props.submitText}
        cancelText={props.cancelText}
        onSubmit={props.onSubmit}
        onClose={props.onClose}
      >
        <Grid>
          <Typography variant="h3" mb={5}>
            آگهی
          </Typography>
          <Grid mb={2} container>
            <InputFileUpload
              label="بارگذاری عکس"
              sx={{ height: "100px", mb: 2, ml: 2 }}
              onChange={props.onUploadImage}
            />
            {props.form?.images?.map((v: any, i: number) => {
              return (
                <Grid key={i} width={"133px"} height={"100px"} ml={2} mb={2}>
                  <Imageuploaded onClick={() => props.onRemoveImage(v, i)}>
                    <Appimage
                      src={typeof v == "string" ? v : v.base64}
                      alt="/"
                      style={{ borderRadius: "12px" }}
                    />
                  </Imageuploaded>
                </Grid>
              );
            })}
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={" نام ملک*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "title")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.title}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"متراژ*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "meterage")
              }
              validators={require}
              errorMessages={errMessage}
              value={global.handleNumberAndDecimal(props.form?.meterage)}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"قیمت*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "price")
              }
              validators={require}
              errorMessages={errMessage}
              value={global.handleNumberAndDecimal(props.form?.price)}
            />
          </Grid>
          <Grid width={"100%"} height={"100px"}>
            <Appselect
              label="نوع ملک"
              sx={{ width: "100%" }}
              fullWidth
              value={props.form?.category}
              options={optionCategory}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "category")
              }
            />
          </Grid>
          <Grid mb={2} width={"100%"} height={"100px"}>
            <AppTextArea
              placeholder="توضیحات"
              value={props.form?.description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "description")
              }
            />
          </Grid>
        </Grid>
      </FormLayout>
    </AppModal>
  );
};

export default FormAdd;
