import React from "react";
import { Divider, Grid, Typography, useTheme } from "@mui/material";
import Steper from "@/libs/Steper";
import Appimage from "@/common/Appimage";
import Applink from "@/common/Applink";
import { authLayoutType } from "@/types/authType";

const AuthLayout: React.FC<Partial<authLayoutType>> = (props) => {
  const theme = useTheme();
  return (
    <>
      <Grid
        sx={{
          maxWidth: { xs: "100%", xl: "1536px" },
          margin: "0 auto",
          justifyContent: { xs: "center", sm: "space-between" },
        }}
        container
        justifyContent={"space-between"}
        alignItems={"strech"}
        minHeight={"100vh"}
      >
        <Grid
          item
          xs={12}
          md={5}
          sm={7}
          sx={{
            borderColor: theme.palette.grey[300],
            py: 10,
            px: 5,
            borderRadius: "12px",
            position: "relative",
          }}
        >
          {props.step && (
            <Grid mb={5}>
              <Steper activeStep={props.stepNumber} steps={props.step} />
            </Grid>
          )}

          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h3" mb={2} textAlign={"right"}>
              {props.title}
            </Typography>
            <Applink link={"/"}>بازگشت به سایت</Applink>
          </Grid>
          <Grid mb={2}>
            <Typography variant="caption">{props.sub_title}</Typography>
          </Grid>
          {props.children}
          {props.text_is_register && (
            <Grid container alignItems={"center"} mt={4}>
              <Typography variant="h5" ml={1}>
                {props.text_sub_register}
              </Typography>
              <Applink link={props.link}>{props.text_is_register} </Applink>
            </Grid>
          )}
          <Typography mt={4} variant="h5">
            ورود شما به معنای پذیرش{" "}
            {
              <Applink style={{ display: "inline" }} link="/">
                {"شرایط  تالار ملک"}
              </Applink>
            }{" "}
            و{" "}
            <Applink style={{ display: "inline" }} link="/">
              {"قوانین و حریم خصوصی"}
            </Applink>{" "}
            است
          </Typography>
        </Grid>

        <Grid item xs={0} md={7} sm={6}>
          <Appimage src="/images/city3.jpeg" />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLayout;
