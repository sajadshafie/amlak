import { Grid, Checkbox, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {
  label: string | React.ReactNode;
  defaultChecked: boolean;
  onChange?: (e: boolean) => void;
  value?: boolean;
};

function Appcheckbox(props: Props) {
  const [checked, setChecked] = useState<boolean>(props.defaultChecked);
  const checkedHandler = () => {
    setChecked(!checked);
    props.onChange && props.onChange(!props.defaultChecked);
  };
  return (
    <Grid container>
      <Grid
        width={"fit-content"}
        onClick={checkedHandler}
        container
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Checkbox
          checked={checked}
          defaultChecked={checked}
          onChange={checkedHandler}
        />
        <Typography variant="h5">{props.label}</Typography>
      </Grid>
    </Grid>
  );
}

export default Appcheckbox;
