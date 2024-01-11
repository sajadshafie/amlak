import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Appbutton from "@/common/Appbutton";
import DraftsIcon from "@mui/icons-material/Drafts";
type propsType = {
  onCallBack: () => void;
  process: "loading" | "data" | "error" | "no data";
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
            sx={{
              marginBottom: "10px",
              color: theme.palette.error.main,
              fontSize: "35px",
            }}
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
      {props.process == "no data" && (
        <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <DraftsIcon sx={{ marginBottom: "10px", fontSize: "28px" }} />
          <Typography variant="h5">اطلاعاتی یافت نشد</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ProccessLoading;
