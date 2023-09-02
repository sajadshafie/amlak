import React from "react";
import Main from "../main";
import { Grid, Typography } from "@mui/material";
import Appimage from "@/common/Appimage";

type authLayoutType = {
  children: React.ReactNode;
  title: string;
};

const AuthLayout: React.FC<Partial<authLayoutType>> = (props) => {
  return (
    <Main>
      <Grid
        sx={{
          maxWidth: { xs: "100%", xl: "1536px" },
          margin: "160px  auto 0 auto",
          px: { xs: 2, sm: 4 },
        }}
        container
        justifyContent={"space-between"}
      >
        <Grid item xs={12}>
          <Typography>{props.title}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          {props.children}
        </Grid>
      </Grid>
    </Main>
  );
};

export default AuthLayout;
