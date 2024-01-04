import Main from "@/Layout/main";
import Product from "@/components/Home/product";
import api from "@/config/api";
import ProccessLoading from "@/libs/processloading";
import { adviserType } from "@/types/addvertise";
import React, { useEffect, useState } from "react";

const Viewall: React.FC = () => {
  const [data, setData] = useState<adviserType[]>([]);
  const [process, setProcess] = useState<"loading" | "data" | "error">(
    "loading"
  );
  const getData = () => {
    setProcess("loading");
    api
      .advertiseAdvanceSearch("status=2")
      .then((res) => {
        setData(res.data.result);
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
    <Main active={5}>
      <ProccessLoading process={process}>
        <Product data={data} title="مشاهده همه املاک" />
      </ProccessLoading>
    </Main>
  );
};

export default Viewall;
