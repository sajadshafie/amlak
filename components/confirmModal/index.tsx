import AppModal from "@/common/AppModal";
import Appbutton from "@/common/Appbutton";
import { Grid, Typography } from "@mui/material";
import React from "react";

type propstypes = {
  isOpen: boolean;
  title: string;
  onConfirm: () => void;
  onClose: () => void;
};

const ConfrimModal: React.FC<Partial<propstypes>> = (props) => {
  return (
    <AppModal open={props.isOpen} onClose={props.onClose} height="150px">
      <Grid
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Typography variant="h4">{props.title}</Typography>
        <Grid display={"flex"} justifyContent={"flex-end"}>
          <Appbutton
            onClick={props.onClose}
            textVariant="h6"
            variant="outlined"
          >
            انصراف
          </Appbutton>
          <Appbutton
            onClick={props.onConfirm}
            sx={{ mr: 1 }}
            textVariant="h6"
            variant="contained"
          >
            تایید
          </Appbutton>
        </Grid>
      </Grid>
    </AppModal>
  );
};

export default ConfrimModal;
