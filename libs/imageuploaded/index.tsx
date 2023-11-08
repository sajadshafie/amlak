import React from "react";
import { IconButton, Grid, useTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type propsType = {
  children: React.ReactNode;
  onClick: () => void;
};

const Imageuploaded: React.FC<propsType> = (props) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        boxShadow: "2px 13px 26px -9px rgba(61,61,61,0.47)",

        borderRadius: "12px",
        width: "100%",
        height: "100%",
        position: "relative",
        transition: "0.2s",
        "& hover": {
          background: "red",
        },
      }}
    >
      <Grid sx={{ position: "absolute", left: 0, top: 0 }}>
        <IconButton sx={{ zIndex: "100" }} onClick={props.onClick}>
          <DeleteOutlineIcon
            sx={{
              fontSize: 18,
              color: theme.palette.error.main,
            }}
          />
        </IconButton>
      </Grid>

      {props.children}
    </Grid>
  );
};

export default Imageuploaded;
