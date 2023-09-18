import { Grid } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type propsType = {
  handleClick: (e: string) => void;
  type: string;
};

const Arrow: React.FC<Partial<propsType>> = (props) => {
  return (
    <Grid>
      {props.type == "prev" ? (
        <Grid
          onClick={(e) => props.handleClick && props.handleClick("next")}
          sx={{
            cursor: "pointer",
            position: "absolute",
            right: "15px",
            backgroundColor: "white",
            opacity: 0.6,
            borderRadius: "100%",
            width: "25px",
            height: "25px",
            zIndex: 5,
            top: "40%",
          }}
        >
          <KeyboardArrowRightIcon />
        </Grid>
      ) : (
        <Grid
          onClick={() => props.handleClick && props.handleClick("prev")}
          sx={{
            cursor: "pointer",
            position: "absolute",
            left: "15px",
            backgroundColor: "white",
            opacity: 0.6,
            borderRadius: "100%",
            width: "25px",
            height: "25px",
            zIndex: 5,
            top: "40%",
          }}
        >
          <KeyboardArrowLeftIcon />
        </Grid>
      )}
    </Grid>
  );
};

export default Arrow;
