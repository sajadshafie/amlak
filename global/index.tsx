import style from "./style.module.scss";
import { Grid } from "@mui/material";
import moment from "jalali-moment";
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
        break;
      case 1:
        res = {
          status: "درحال انتظار",
          type: "pendding",
        };
        break;
      case 2:
        res = {
          status: "تایید شده",
          type: "success",
        };
        break;
      case 3:
        res = {
          status: "رد شده",
          type: "error",
        };
        break;
      case 4:
        res = {
          status: "فروخته شده",
          type: "sold",
        };
        break;
      case 5:
        res = {
          status: "لغو شده",
          type: "cancel",
        };
        break;
    }
    return res;
  },
  convertPersianDate: (date: string) => {
    let res;
    if (date) {
      const datetime = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS");
      const jalaliDate = datetime?.format("jYYYY/jMM/jDD");
      res = jalaliDate;
    }
    return res;
  },
  handleNumberAndDecimal: (value: string) => {
    const val = value && value.replaceAll(",", "");
    let res;
    if (value) {
      const number = Number(val);
      const stringfy = JSON.stringify(number).replace(/[^0-9]/g, "");
      res = Number(stringfy).toLocaleString("en-CA");
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
    reader?.readAsDataURL(file);
    res = new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
    return res;
  },
  documnetTypeHandler: (number: number) => {
    let res;
    switch (number) {
      case 0:
        res = "نا مشخص";
        break;
      case 1:
        res = "تک برگ";
        break;
      case 2:
        res = "منگوله دار";
        break;

      default:
        break;
    }
    return res;
  },
  categoryHandler: (number: number) => {
    let res;
    switch (number) {
      case 0:
        res = "نا مشخص";
        break;
      case 1:
        res = "زمین";
        break;
      case 2:
        res = "آپارتمان";
        break;

      default:
        break;
    }
    return res;
  },
};
