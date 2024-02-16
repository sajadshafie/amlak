import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
type propstype = {
  open: boolean;
  active: number;
};

type itemTypes = {
  title: string;
  link: string;
  id: number;
  icon: React.ReactNode;
};

const ListItemApp: React.FC<Partial<propstype>> = (props) => {
  const router = useRouter();
  const theme = useTheme();
  const Items: itemTypes[] = [
    {
      title: "اگهی",
      link: "/provider",
      id: 1,
      icon: <MailIcon sx={{ color: "white" }} />,
    },
    {
      title: "املاک خریداری شده",
      link: "/provider/purchased",
      id: 2,
      icon: <InboxIcon sx={{ color: "white" }} />,
    },
    {
      title: "پروفایل",
      link: "",
      id: 3,
      icon: <InboxIcon sx={{ color: "white" }} />,
    },
  ];
  const handleLogout = () => {
    Cookies.remove("usertoken");
    router.push("/login");
  };
  return (
    <>
      {Items.map((v: itemTypes, i: number) => {
        return (
          <ListItem
            disablePadding
            key={i}
            sx={{
              background:
                props.active == v.id ? theme.palette.primary.yellow300 : "",
              borderRadius: "12px",
            }}
          >
            <ListItemButton onClick={() => router.push(v.link)}>
              <ListItemIcon>{v.icon}</ListItemIcon>
              <Typography
                variant="h5"
                sx={{ color: "white", textAlign: "right" }}
              >
                {v.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        );
      })}
      <ListItem disablePadding onClick={handleLogout}>
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography variant="h5" sx={{ color: "white", textAlign: "right" }}>
            {"خروج"}
          </Typography>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListItemApp;
