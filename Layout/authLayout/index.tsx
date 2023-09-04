import React from "react";

import { Divider, Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import LockIcon from "@mui/icons-material/Lock";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Applink from "@/common/Applink";
import Main from "../main";
type authLayoutType = {
  children: React.ReactNode;
  title: string;
  sub_title: string;
  description: string;
};

const AuthLayout: React.FC<Partial<authLayoutType>> = (props) => {
  const theme = useTheme();
  return (
    <Main>
      <Grid
        sx={{
          maxWidth: { xs: "100%", xl: "1536px" },
          margin: "0 auto",
        }}
        container
        justifyContent={"center"}
        alignItems={"center"}
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
          <Grid xs={12} item justifyContent={"center"} display={"flex"} mb={2}>
            <LockIcon
              sx={{
                color: "white",
                fontSize: "30px",
                backgroundColor: theme.palette.primary.main,
                p: 2.5,
                borderRadius: "100%",
              }}
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              خانه
            </Typography>
          </Grid>

          <Typography variant="h3" mb={2} textAlign={"right"}>
            {props.title}
          </Typography>
          <Grid mb={2}>
            <Typography variant="caption">{props.description}</Typography>
          </Grid>
          {props.children}
          <Typography mt={4} variant="h6">
            ورود شما به معنای پذیرش <Applink text="شرایط املاک مهر" link="/" />{" "}
            و <Applink text="قوانین و حریم خصوصی" link="/" /> است
          </Typography>
        </Grid>

        {/* <Grid item xs={0} md={7} sm={6}>
          <Appimage src="/images/city3.jpeg" />
        </Grid> */}
      </Grid>
    </Main>
  );
};

export default AuthLayout;
