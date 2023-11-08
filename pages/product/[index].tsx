import { Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import Main from "@/Layout/main";
import Carousel from "@/libs/Carousel";
import { productImage } from "@/components/product/CarouselItems";
import { context } from "@/context";
import Appbutton from "@/common/Appbutton";
import DetailItems from "@/components/product/detailItem/items";
import Detailitem from "@/components/product/detailItem";
import SmallCarousel from "@/components/product/smallCarousel";
import Map from "@/libs/googleMap";
import Howtobuy from "@/components/product/howtobuy";
import Addcompany from "@/libs/addCompany";

type detailType = {
  label: string;
  value: string;
  is_price?: boolean;
  id: number;
};

const Product: React.FC = ({ data }: { data?: any }) => {
  console.log(data);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { state } = useContext(context);
  const sliderRef = useRef<any>(null);
  const onClickItem = (v: any, index: number) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const handlerSlide = (e: string) => {
    console.log(activeIndex, productImage.length);
    console.log(activeIndex > productImage.length || activeIndex == 0);
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
  console.log(activeIndex);
  const onClickArrow = (e: string) => {
    e == "prev"
      ? (sliderRef.current?.slickPrev(), handlerSlide(e))
      : (sliderRef.current?.slickNext(), handlerSlide(e));
  };
  return (
    <Main active={5}>
      <Grid
        container
        justifyContent={"space-between"}
        sx={{
          maxWidth: state.maxWidth,
          px: state.px,
          margin: "100px auto",
        }}
      >
        <Grid item md={5} xs={12} pl={2}>
          <Typography variant="h3" mb={2}>
            ملک اداری مجهز به مبلمان
          </Typography>
          <Grid container mb={2}>
            <Typography variant="body2" ml={1} sx={{ fontSize: 14 }}>
              آگهی ثبت شده :
            </Typography>
            <Typography variant="body1">2 روز پیش در تهران , ولیعصر</Typography>
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
            <Appbutton variant="outlined" textVariant="h5">
              درباره تالار ملک
            </Appbutton>
          </Grid>
          <Grid mb={4}>
            {DetailItems.map((v: detailType, i: number) => {
              return (
                <React.Fragment key={v.id}>
                  <Detailitem
                    label={v.label}
                    value={v.value}
                    is_price={v.is_price}
                  />
                  <Divider sx={{ my: 1.5 }} />
                </React.Fragment>
              );
            })}
          </Grid>
          <Typography mb={2} variant="h4">
            توضیحات
          </Typography>
          <Typography variant="h5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را
          </Typography>
        </Grid>

        <Grid item md={5.9} xs={12}>
          <Grid mb={2}>
            <Carousel
              onClickArrow={onClickArrow}
              slidesToShow={1}
              dots={true}
              infinite={true}
              speed={500}
              slidesToScroll={1}
              data={productImage}
              ref={sliderRef}
              initialSlide={0}
            />
          </Grid>
          <SmallCarousel activeIndex={activeIndex} onClickItem={onClickItem} />
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
    </Main>
  );
};

export default Product;
