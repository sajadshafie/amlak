import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Applink from "@/common/Applink";
import { useRouter } from "next/router";
type propstype = {
  title?: string;
  link?: string;
  isBack: boolean;
  router?: any;
};

const BackTo: React.FC<propstype> = (props) => {
  const router = useRouter();
  const onBack = () => {
    props.isBack ? router.back() : router.push(props.link);
  };
  const theme = useTheme();
  return (
    <Grid mb={2}>
      <Grid onClick={onBack} sx={{ cursor: "pointer" }}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Typography variant="h5">{props.title}</Typography>
          <ArrowBackIosNewIcon
            sx={{ color: theme.palette.primary.main, fontSize: "16px" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BackTo;
