import style from "./style.module.scss";
import { Grid } from "@mui/material";
export const step_auth_register = ["ثبت نام", "کد تایید", "اهراز هویت"];

export const Global = {
  statusHandler: (type: string, content: string) => {
    return (
      <Grid
        width={"100px"}
        height={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"20px"}
        fontWeight={"600"}
        fontSize={"12px"}
        className={style[`${type}`]}
      >
        {content}
      </Grid>
    );
  },
};
