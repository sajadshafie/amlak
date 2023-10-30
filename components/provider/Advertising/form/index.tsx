import AppModal from "@/common/AppModal";
import React from "react";
import AppTextValidator from "@/libs/AppTextvalidator";
import { Grid, Typography } from "@mui/material";
import FormLayout from "@/Layout/formLayout";
import { adviserType } from "@/types/addvertise";
type formTypes = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onChangeForm: (value: string, type: string) => void;
  form: adviserType;
  submitText: string;
  cancelText: string;
  loading: boolean;
};

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
            اگهی
          </Typography>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"نوع ملک*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "type")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.type}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"نوع ملک*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "type")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.type}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"متراژ*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "meter")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.meter}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"منطقه*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "location")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.location}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"قیمت هر متر*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "price_meter")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.price_meter}
            />
          </Grid>
          <Grid mb={2}>
            <AppTextValidator
              type="text"
              fullWidth
              label={"وضعیت*"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.onChangeForm(e.target.value, "status")
              }
              validators={require}
              errorMessages={errMessage}
              value={props.form?.status}
            />
          </Grid>
        </Grid>
      </FormLayout>
    </AppModal>
  );
};

export default FormAdd;
