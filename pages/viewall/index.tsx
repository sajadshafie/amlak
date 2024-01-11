import Main from "@/Layout/main";
import Product from "@/components/Home/product";
import api from "@/config/api";
import ProccessLoading from "@/libs/processloading";
import { adviserType } from "@/types/addvertise";
import { Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

const Viewall: React.FC = () => {
  const [data, setData] = useState<adviserType[]>([]);
  const [process, setProcess] = useState<
    "loading" | "data" | "error" | "no data"
  >("loading");
  const getData = () => {
    setProcess("loading");
    api
      .advertiseAdvanceSearch("status=2")
      .then((res) => {
        setData(res.data.result);
        setProcess(res.data.result.length >= 1 ? "data" : "no data");
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
    <Main active={5}>
      <Typography variant="h3" mb={4} textAlign={"center"}>
        {"مشاهده همه املاک"}
      </Typography>
      <ProccessLoading process={process}>
        <Product data={data} title={""} />
      </ProccessLoading>
    </Main>
  );
};

export default Viewall;
