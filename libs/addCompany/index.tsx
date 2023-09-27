import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Applink from "@/common/Applink";
import Appimage from "@/common/Appimage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Addcompany: React.FC = () => {
  const theme = useTheme();
  return (
    <Applink title="مشاهده اگهی های این شرکت" link="/">
      <Grid
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: "8px",
        }}
        p={2}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid container xs={11}>
          <Grid height={"70px"} width={"70px"} ml={2}>
            <Appimage src="/images/logo_company.png" />
          </Grid>
          <Grid>
            <Typography variant="h4" mb={2}>
              فروشگاه دکو مهر میز صندلی و مبل اداری
            </Typography>
            <Typography variant="caption">مشاهده همه اگهی ها</Typography>
          </Grid>
        </Grid>
        <ArrowBackIosNewIcon />
      </Grid>
    </Applink>
  );
};

export default Addcompany;
