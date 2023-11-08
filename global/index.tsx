import style from "./style.module.scss";
import { Grid } from "@mui/material";

export default {
  statusHandler: (type: string, content: string) => {
    return (
      <Grid
        width={"80px"}
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
  step_auth_register: ["ثبت نام", "کد تایید", "اهراز هویت"],
  statusResult: (status_number?: 0 | 1 | 2 | 3 | 4 | 5) => {
    let res;
    switch (status_number) {
      case 0:
        res = {
          status: "معلق",
          type: "unknow",
        };
      case 1:
        res = {
          status: "درحال انتظار",
          type: "pendding",
        };
      case 2:
        res = {
          status: "تایید شده",
          type: "success",
        };
      case 3:
        res = {
          status: "رد شده",
          type: "error",
        };
      case 4:
        res = {
          status: "فروخته شده",
          type: "sold",
        };
      case 5:
        res = {
          status: "لغو شده",
          type: "cancel",
        };
    }
    return res;
  },
  handleNumberAndDecimal: (value: string) => {
    const val = value && value.replaceAll(",", "");
    let res;
    if (value) {
      res = Number(val).toLocaleString("en-CA");
    }
    return res;
  },
  DecimalToNumber: (value: string) => {
    const val = value.replaceAll(",", "");
    return Number(val);
  },
  blobToImage: async (file: any) => {
    let res;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    res = new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
    return res;
  },
};
