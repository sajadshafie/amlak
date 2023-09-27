import React from "react";
import { Grid, Typography, Popover, TextField } from "@mui/material";
import Items from "./items";
import PersonIcon from "@mui/icons-material/Person";
import style from "./style.module.scss";
import Appbutton from "@/common/Appbutton";
import Profile from "./profile";
import { useRouter } from "next/router";
import Applink from "@/common/Applink";
type Menu = {
  title: string;
  id: number;
  link: string;
};

type Props = {
  active: number;
};

const Header: React.FC<Partial<Props>> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const router = useRouter();
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
      sx={{
        px: { xs: 2, md: 4 },
        maxWidth: { xs: "100%", xl: "1536px" },
        margin: "0 auto",
        py: 3,
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
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
      <Grid md={5} sm={5} justifyContent={"flex-end"} container item>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Grid
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              mx: 4,
            }}
            onClick={handleClick}
            aria-describedby={id}
          >
            <PersonIcon sx={{ fontSize: "25px" }} />
            <Typography variant="caption" className="text_transition_sub">
              ورود فروشنده
            </Typography>
          </Grid>
          {/* <Appbutton variant="contained">ثبت اگهی</Appbutton> */}
          <Appbutton variant="contained" sx={{ ml: 1 }}>
            ثبت اگهی
          </Appbutton>
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
