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

          <Typography variant="h3" mb={2} textAlign={"right"}>
            {props.title}
          </Typography>
          <Grid mb={2}>
            <Typography variant="caption">{props.sub_title}</Typography>
          </Grid>
          {props.children}
          {props.text_is_register && (
            <Typography mt={4} variant="h6">
              {props.text_sub_register}{" "}
              <Applink text={props.text_is_register} link={props.link} />
            </Typography>
          )}
          <Typography mt={4} variant="h6">
            ورود شما به معنای پذیرش <Applink text="شرایط  تالار ملک" link="/" />{" "}
            و <Applink text="قوانین و حریم خصوصی" link="/" /> است
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
