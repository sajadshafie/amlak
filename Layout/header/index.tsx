import React from "react";
import { Grid, Typography, Popover, TextField } from "@mui/material";
import Items from "./items";
import PersonIcon from "@mui/icons-material/Person";
import style from "./style.module.scss";
import Appbutton from "@/common/Appbutton";
import Profile from "./profile";
import Appinput from "@/common/Appinput";

type Menu = {
  title: string;
  id: number;
};

type Props = {
  active: number;
};

const Header: React.FC<Partial<Props>> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid
      container
      p={2}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid container justifyContent={"space-between"} md={5} sm={9} item>
        {Items.map((v: Menu, i: number) => {
          console.log(v.id);
          return (
            <Grid className={style.item_hover}>
              <Typography
                className={`${
                  props.active == v.id && "text_active_main"
                } text_transition_main `}
                sx={{ cursor: "pointer" }}
                variant="h6"
                key={i}
              >
                {v.title}
              </Typography>
              <Typography
                mt={0.5}
                className={`${
                  props.active == v.id ? style.active_menu : style.line
                }`}
              ></Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid md={5} sm={1} justifyContent={"flex-end"} container item>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Appinput variant="outlined" sx={{ width: "200px" }} label="جستجو" />
          <Grid
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              mx: 2,
            }}
            onClick={handleClick}
            aria-describedby={id}
          >
            <PersonIcon sx={{ fontSize: "25px" }} />
            <Typography variant="caption">پروفایل</Typography>
          </Grid>
          <Appbutton variant="contained">ثبت اگهی</Appbutton>
        </Grid>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Profile />
        </Popover>
      </Grid>
    </Grid>
  );
};

export default Header;
