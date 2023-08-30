import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Appimage from "@/common/Appimage";
import { Whyitems } from "./items";
import CheckIcon from "@mui/icons-material/Check";

const Whymehr: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item sm={5.8} xs={12}>
        <Appimage style={{ borderRadius: "12px" }} src="/images/city2.jpeg" />
      </Grid>
      <Grid item sm={5.8} xs={12}>
        <Typography variant="h4" mb={2}>
          چرا املاک مهر را انتخاب کنیم؟
        </Typography>
        <Typography variant="body2" mb={1}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        </Typography>
        {Whyitems.map((v: string, i: number) => {
          return (
            <Grid mb={1} display={"flex"} alignItems={"center"} key={i}>
              <CheckIcon
                sx={{
                  color: theme.palette.success.dark,
                }}
              />
              <Typography mr={1} variant="body2">
                {v}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Whymehr;
