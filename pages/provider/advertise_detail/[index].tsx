import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import ProviderLayout from "@/Layout/providerLayout";
import api from "@/config/api";
import { adviserType } from "@/types/addvertise";
import { useRouter } from "next/router";
import ProccessLoading from "@/libs/processloading";
import MessageCard from "@/libs/Messagecard";
import BackTo from "@/libs/BackTo";
import Appimage from "@/common/Appimage";
import { imageURL } from "@/config/global";
import global from "@/global";
import { context } from "@/context";

const Advertise_detail: React.FC = () => {
  const { state, setState } = useContext(context);
  const theme = useTheme();
  const router = useRouter();
  //@ts-ignore
  const [data, setData] = useState<adviserType>({
    category: 0,
    description: "",
    meterage: "",
    registerDate: "",
    price: 0,
    status: 0,
    title: "",
    images: [],
  });
  const [process, setProcess] = useState<"loading" | "data" | "error">(
    "loading"
  );

  const getData = () => {
    setProcess("loading");
    api
      .getAdvertiseList(`id=${router.query.index}`)
      .then((res) => {
        console.log(res);
        setData({
          ...res.data.result,
          images: res.data.result?.images
            ? res.data.result?.images?.split(",")
            : [],
        });

        setProcess("data");
      })
      .catch((err) => {
        console.log(err);
        setProcess("error");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProviderLayout>
      <BackTo title="بازگشت" isBack />
      <ProccessLoading process={process} onCallBack={() => getData()}>
        <Grid width={"100%"} height={"100%"}>
          <Grid mb={2}>
            <MessageCard
              title="آگهی ها"
              backgroundColor2="#8ecae6"
              backgroundColor="#a8dadc"
              subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با "
              imageSrc="/images/city.jpeg"
              imageHeight="245px"
            />
          </Grid>
          <Grid>
            <Grid mb={2}>
              <Typography variant="h4" mb={2}>
                تصاویر
              </Typography>
              <Grid container spacing={2}>
                {data?.images?.length >= 1
                  ? data.images?.map((v: string, i: number) => {
                      return (
                        <Grid
                          sx={{}}
                          key={i}
                          item
                          md={4}
                          sm={6}
                          xs={12}
                          height={"175px"}
                        >
                          <Appimage
                            style={{
                              borderRadius: "12px",
                              boxShadow: state.boxShadow,
                            }}
                            src={imageURL + v}
                          />
                        </Grid>
                      );
                    })
                  : "تصویری موجود نیست"}
              </Grid>
            </Grid>
            <Typography mb={1} variant="h4">
              اطلاعات
            </Typography>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                نام ملک :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {data.title}
              </Typography>
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                متراژ :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {data?.meterage?.toLocaleString("en-CA")} متر
              </Typography>
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                {" "}
                نوع سند :
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                {global?.documnetTypeHandler(data?.documentType as number)}
              </Typography>
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                نوع ملک :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {global.categoryHandler(data?.category as number)}
              </Typography>
            </Grid>
            <Grid display={"flex"} alignItems={"center"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                وضعیت :
              </Typography>
              {global.statusHandler(
                global?.statusResult(data.status)?.type as string,
                global?.statusResult(data.status)?.status as string
              )}
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                تاریخ ثبت :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {global.convertPersianDate(data.registerDate as string)}
              </Typography>
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                قیمت :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {data?.price?.toLocaleString("en-CA")} تومان
              </Typography>
            </Grid>
            <Grid display={"flex"} mb={1}>
              <Typography
                fontWeight={"bold"}
                fontSize={"14px"}
                variant="caption"
                ml={1}
              >
                توضیحات :
              </Typography>
              <Typography fontWeight={"bold"} variant="h5">
                {data.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ProccessLoading>
    </ProviderLayout>
  );
};

export default Advertise_detail;
