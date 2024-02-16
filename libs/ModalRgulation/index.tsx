import React, { useState } from "react";
import AppModal from "@/common/AppModal";
import { Grid, Typography } from "@mui/material";
import Appcheckbox from "@/common/Appcheckbox";
import Appbutton from "@/common/Appbutton";
type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
  textButton?: string;
  title: string | undefined;
};

export default function ModalRegulation({
  open,
  onClose,
  onSubmit,
  children,
  textButton = "تایید و ثبت",
  title = " قوانین و مقررات استفاده از سایت اینترنتی تالار ملک ",
}: Props) {
  const [checked, setChecked] = useState<boolean>(true);
  const onChangeChecked = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <AppModal onClose={onClose} open={open}>
      <Typography variant="h3">{title}</Typography>
      <Grid p={2} maxHeight={300} my={3} sx={{ overflowY: "scroll" }}>
        {children}
      </Grid>
      <Appcheckbox
        onChange={onChangeChecked}
        label="قوانین و شرایط را خوانده ام و قبول دارم"
        defaultChecked={checked}
      />
      <Grid
        mt={3}
        container
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Appbutton disabled={!checked} variant={"contained"} onClick={onSubmit}>
          {textButton}
        </Appbutton>
      </Grid>
    </AppModal>
  );
}
