import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Appbutton from "@/common/Appbutton";

type propsType = {
  onCallBack: () => void;
  process: "loading" | "data" | "error";
  children: React.ReactNode;
};

const ProccessLoading: React.FC<Partial<propsType>> = (props) => {
  const theme = useTheme();
  return (
    <Grid
      height={"100%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {props.process == "loading" && (
        <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <CircularProgress size={28} sx={{ marginBottom: "10px" }} />
          <Typography variant="h5">در حال بارگذاری اطلاعات</Typography>
        </Grid>
      )}
      {props.process == "error" && (
        <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <DangerousIcon
            size={35}
            sx={{ marginBottom: "10px", color: theme.palette.error.main }}
          />
          <Typography variant="h5">خطا در پردازش اطلاعات</Typography>
          <Appbutton
            onClick={props.onCallBack}
            sx={{ mt: 2 }}
            variant="outlined"
            textVariant="h5"
          >
            دوباره تلاش کنید
          </Appbutton>
        </Grid>
      )}
      {props.process == "data" && props.children}
    </Grid>
  );
};

export default ProccessLoading;
