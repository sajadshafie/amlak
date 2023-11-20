import React from "react";
import { Grid, Typography } from "@mui/material";
import Applink from "@/common/Applink";
import Items from "../items";
import style from "../style.module.scss";
type Menu = {
  title: string;
  id: number;
  link: string;
};

type propsType = {
  active: boolean;
};

const Listrender: React.FC<Partial<propsType>> = (props) => {
  return (
    <Grid container md={7} sm={7} item>
      {Items.map((v: Menu, i: number) => {
        return (
          <Grid
            p={2}
            ml={2}
            className={style.item_hover}
            sx={{ cursor: "pointer" }}
          >
            <Applink link={v.link}>
              <>
                <Typography
                  className={`${
                    props.active == v.id && "text_active_main"
                  } text_transition_main `}
                  variant="h5"
                  key={i}
                >
                  {v.title}
                </Typography>
              </>
            </Applink>

            <Typography
              mt={0.5}
              className={`${
                props.active == v.id ? style.active_menu : style.line
              }`}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Listrender;
