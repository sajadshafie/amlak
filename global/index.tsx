import { adviserType } from "@/types/addvertise";
import style from "./style.module.scss";
import { Grid } from "@mui/material";
import moment from "jalali-moment";
import { CategoryAddvertising, StatusAddvertising } from "@/enum";
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
      case StatusAddvertising.unknow:
        res = {
          status: "معلق",
          type: "unknow",
        };
        break;
      case StatusAddvertising.pendding:
        res = {
          status: "درحال انتظار",
          type: "pendding",
        };
        break;
      case StatusAddvertising.success:
        res = {
          status: "تایید شده",
          type: "success",
        };
        break;
      case StatusAddvertising.error:
        res = {
          status: "رد شده",
          type: "error",
        };
        break;
      case StatusAddvertising.trading:
        res = {
          status: "درحال معامله",
          type: "trading",
        };
        break;
      case StatusAddvertising.sold:
        res = {
          status: "فروخته شده",
          type: "sold",
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
  patternEmail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
      case CategoryAddvertising.unknow:
        res = "نا مشخص";
        break;
      case CategoryAddvertising.Earth:
        res = "زمین";
        break;
      case CategoryAddvertising.Apartment:
        res = "آپارتمان";
        break;

      default:
        break;
    }
    return res;
  },

  objectToArray: (object: adviserType) => {
    const renderField = [
      "description",
      "documentType",
      "category",
      "title",
      "status",
      "registerDate",
      "price",
      "meterage",
    ];
    const ss = Object.entries(object);

    const maper = ss.map((item) => {
      if (renderField.includes(item[0])) {
        return item;
      }
    });
    const res = maper.filter((v) => v !== undefined);
    return res;
  },

  convertLangueg: (text: string) => {
    const words = [
      {
        label: "title",
        value: "نام ملک",
      },
      {
        label: "description",
        value: "توضیحات",
      },
      {
        label: "documentType",
        value: "نوع ملک",
      },
      {
        label: "status",
        value: "وضعیت",
      },
      {
        label: "category",
        value: "دسته بندی",
      },
      {
        label: "registerDate",
        value: "تاریخ ثبت",
      },
      {
        label: "price",
        value: "قیمت",
      },
      {
        label: "meterage",
        value: "متراژ",
      },
    ];
    const res = words.find((v) => v.label == text)?.value;
    return res;
  },
};
