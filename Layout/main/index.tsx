import React, { ReactNode } from "react";
import { Grid } from "@mui/material";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: ReactNode;

  active: number;
};

const Main: React.FC<Partial<Props>> = (props) => {
  return (
    <Grid>
      <Header active={props.active} />
      <Grid
        sx={{
          direction: "rtl",
          width: "100%",
        }}
        mb={2}
      >
        {props.children}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Main;
