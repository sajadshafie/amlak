import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type appProps = {
  children: React.ReactNode;
  title: string;
};

const AppTooltip: React.FC<Partial<appProps>> = (props) => {
  return (
    <Tooltip title={props.title}>
      <IconButton>{props.children}</IconButton>
    </Tooltip>
  );
};

export default AppTooltip;
