import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Popover,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

import Appbutton from "@/common/Appbutton";
import Profile from "./profile";

import Cookies from "js-cookie";
import Listrender from "./listRender";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./listRender/drawerMenu";
type Props = {
  active: number;
};

const Header: React.FC<Partial<Props>> = (props) => {
  const [isLogin, setIslogin] = useState<boolean>(false);
  const theme = useTheme();
  const query = useMediaQuery("(min-width:1055px)");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const onToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    Cookies.get("usertoken") ? setIslogin(true) : setIslogin(false);
  }, []);

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
      {!query ? (
        <React.Fragment>
          <MenuIcon
            onClick={onToggle}
            sx={{
              cursor: "pointer",
              color: theme.palette.primary.main,
              fontSize: "30px",
            }}
          />
          <DrawerMenu
            isOpen={drawerOpen}
            active={props.active}
            onClose={() => setDrawerOpen(false)}
          />
        </React.Fragment>
      ) : (
        <Listrender active={props.active} />
      )}

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
              {isLogin ? "حساب کاربری" : "ورود"}
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
          <Profile isLoging={isLogin} />
        </Popover>
      </Grid>
    </Grid>
  );
};

export default Header;
