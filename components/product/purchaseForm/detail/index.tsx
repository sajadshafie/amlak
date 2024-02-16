import { adviserType } from "@/types/addvertise";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProccessLoading from "@/libs/processloading";
import api from "@/config/api";
import { useRouter } from "next/router";
import Appimage from "@/common/Appimage";
import { imageURL } from "@/config/global";
import ViewCard from "@/libs/viewCard";
const PurchaseDetail: React.FC = () => {
  const [data, setData] = useState<adviserType | null>(null);
  const [process, setProcess] = useState<"loading" | "error" | "data">(
    "loading"
  );

  const [image, setImages] = useState<string | []>([]);
  const router = useRouter();

  const elementImage = (src: string) => {
    return (
      <Grid height={"100%"}>
        <Appimage src={imageURL + src} fill className="border_radius12" />
      </Grid>
    );
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

        await setData(res.data.result);
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
    <ProccessLoading process={process}>
      <ViewCard {...data} images={image} />
    </ProccessLoading>
  );
};

export default PurchaseDetail;
