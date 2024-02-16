import { Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Main from "@/Layout/main";
import Carousel from "@/libs/Carousel";
import { productImage } from "@/components/product/CarouselItems";
import { context } from "@/context";
import Appbutton from "@/common/Appbutton";
import Detailitem from "@/components/product/detailItem";
import SmallCarousel from "@/components/product/smallCarousel";
import Map from "@/libs/googleMap";
import Howtobuy from "@/components/product/howtobuy";
import Addcompany from "@/libs/addCompany";
import { adviserType } from "@/types/addvertise";
import Appimage from "@/common/Appimage";
import api from "@/config/api";
import ProccessLoading from "@/libs/processloading";
import global from "@/global";
import { imageURL } from "@/config/global";
import Cookies from "js-cookie";
import Regulation from "@/global/regulation";
import { toast } from "react-toastify";
import { StatusAddvertising } from "@/enum";

const Product: React.FC<{ props: any }> = (props) => {
  const router = useRouter();
  const [process, setProcess] = useState<"loading" | "error" | "data">(
    "loading"
  );
  const [stepRegulation, setStepRegulation] = useState<number>(1);
  const [isViewRules, setisViewRules] = useState<boolean>(false);
  const [image, setImages] = useState<string | []>([]);
  //@ts-ignore
  const [detail, setDetail] = useState<adviserType>({
    price: 0,
    description: "",
    meterage: 0,
    title: "",
    documentType: 0,
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { state } = useContext(context);
  const sliderRef = useRef<any>(null);
  const onClickItem = (v: any, index: number) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const elementImage = (src: string) => {
    return (
      <Grid height={"100%"}>
        <Appimage src={imageURL + src} fill className="border_radius12" />
      </Grid>
    );
  };

  const handlerSlide = (e: string) => {
    return setActiveIndex((state: number) =>
      activeIndex > productImage.length
        ? 0
        : e == "prev"
        ? state != 0
          ? state - 1
          : 0
        : state + 1
    );
  };

  const onClickArrow = (e: string) => {
    e == "prev"
      ? (sliderRef.current?.slickPrev(), handlerSlide(e))
      : (sliderRef.current?.slickNext(), handlerSlide(e));
  };
  const onOpenRules = () => {
    setisViewRules(true);
  };
  const getData = () => {
    setProcess("loading");
    api
      .getAdvertiseList(`id=${router.query.slug}`)
      .then(async (res) => {
        const imageArr = res.data.result?.images?.split(",");
        const imageEl = imageArr?.map((v: string, i: number) => {
          return {
            id: i,
            element: elementImage(v),
          };
        });
        setImages(imageEl);

        await setDetail(res.data.result);
        setProcess("data");
      })
      .catch((err) => {
        console.log(err);
        setProcess("error");
      });
  };

  const onSubmitRegulation = () => {
    if (stepRegulation == 2) {
      if (Cookies.get("usertoken")) {
        router.push(`/product/form/${router.query.slug}`);
      } else {
        toast.warning("ابتدا وارد شوید");
      }
    } else {
      setStepRegulation(2);
    }
  };
  useEffect(() => {
    getData();
  }, [router.query.slug]);

  return (
    <Main active={5}>
      <ProccessLoading process={process}>
        {/* <ModalRules open={isViewRules} onClose={() => setisViewRules(false)} /> */}
        <Regulation
          title={stepRegulation == 1 ? "قوانین و مقررات آگهی" : undefined}
          onSubmit={onSubmitRegulation}
          textButton={
            stepRegulation == 2
              ? "تایید و اتصال به درگاه"
              : "مشاهده قوانین سایت "
          }
          open={isViewRules}
          onClose={() => {
            setisViewRules(false);
            setStepRegulation(1);
          }}
        />
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            maxWidth: state.maxWidth,
            px: state.px,
            margin: "100px auto",
          }}
        >
          <Grid mb={2} item md={5} xs={12} pl={2}>
            <Typography variant="h3" mb={2}>
              ملک اداری مجهز به مبلمان
            </Typography>
            <Grid container mb={2}>
              <Typography variant="body2" ml={1} sx={{ fontSize: 14 }}>
                آگهی ثبت شده :
              </Typography>
              <Typography variant="body1">
                2 روز پیش در تهران , ولیعصر
              </Typography>
            </Grid>
            <Grid container mb={2}>
              <Typography variant="caption" ml={1} sx={{ fontSize: 14 }}>
                نام دفتر املاک :
              </Typography>
              <Typography variant="body1">تالار ملک</Typography>
            </Grid>
            <Grid container mb={2}>
              <Typography variant="caption" ml={1} sx={{ fontSize: 14 }}>
                نام فروشنده
              </Typography>
              <Typography variant="body1">احسان سبحانی</Typography>
            </Grid>
            <Grid></Grid>
            <Grid mb={4}>
              <Appbutton variant="contained" sx={{ ml: 2 }} textVariant="h5">
                اطلاعات تماس
              </Appbutton>
              <Appbutton
                onClick={onOpenRules}
                variant="outlined"
                textVariant="h5"
              >
                مشاهده قوانین آگهی
              </Appbutton>
            </Grid>
            <Grid mb={4}>
              <React.Fragment>
                <Detailitem label={"title"} value={detail.title} />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
              <React.Fragment>
                <Detailitem
                  label={"meterage"}
                  value={detail.meterage?.toLocaleString("en-CA")}
                />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
              <React.Fragment>
                <Detailitem
                  label={"documentType"}
                  value={global.documnetTypeHandler(
                    detail.documentType as number
                  )}
                />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
              <React.Fragment>
                <Detailitem
                  label={"price"}
                  value={detail.price?.toLocaleString("en-CA")}
                />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
              <React.Fragment>
                <Detailitem
                  label={"category"}
                  value={global.categoryHandler(detail.category as number)}
                />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
              <React.Fragment>
                <Detailitem
                  label={"registerDate"}
                  value={global.convertPersianDate(
                    detail.registerDate as string
                  )}
                />
                <Divider sx={{ my: 1.5 }} />
              </React.Fragment>
            </Grid>
            <Typography mb={2} variant="h4">
              توضیحات
            </Typography>
            <Typography variant="h5" mb={4}>
              {detail.description}
            </Typography>
          </Grid>

          <Grid item md={5.9} xs={12}>
            <Grid mb={2}>
              <Carousel
                height="400px"
                onClickArrow={onClickArrow}
                slidesToShow={1}
                dots={true}
                infinite={true}
                speed={500}
                slidesToScroll={1}
                data={image}
                ref={sliderRef}
                initialSlide={0}
              />
            </Grid>
            {image.length !== 1 && (
              <SmallCarousel
                data={image as any}
                activeIndex={activeIndex}
                onClickItem={onClickItem}
              />
            )}
            <Grid height={"250px"} mt={6} mb={4}>
              <Typography variant="h4" mb={2}>
                محل ملک روی نقشه
              </Typography>
              <Map />
            </Grid>
            <Grid mt={8}>
              <Addcompany />
            </Grid>
            <Howtobuy />
          </Grid>
        </Grid>
      </ProccessLoading>
    </Main>
  );
};

export default Product;
