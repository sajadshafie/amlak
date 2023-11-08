import React, { useEffect } from "react";
import api from "@/config/api";
type propsType = {
  api_name: string;
  setLoading: boolean;
  update_function: () => void;
  setData: any;
  isConsole: boolean;
  getData: () => void;
};

const EditHandler: React.FC<Partial<propsType>> = (props) => {
  const ActionProcess = () => {
    api[props.api_name].then((res: { res: any }) => {
      props.isConsole && console.log(res);
      props.setData(res?.data?.result);
      props.getData();
    });
  };
  useEffect(() => {
    ActionProcess();
  }, []);

  return null;
};

export default EditHandler;
