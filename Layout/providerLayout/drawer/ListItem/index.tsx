import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type itemTypes = {
  title: string;
  link: string;
  id: number;
  icon: React.ReactNode;
};

const ListItemApp: React.FC = () => {
  const Items: itemTypes[] = [
    {
      title: "اگهی",
      link: "",
      id: 1,
      icon: <MailIcon sx={{ color: "white" }} />,
    },
    {
      title: "املاک ",
      link: "",
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
  return (
    <>
      {Items.map((v: itemTypes, i: number) => {
        return (
          <ListItem disablePadding key={i}>
            <ListItemButton>
              <ListItemIcon>{v.icon}</ListItemIcon>
              <Typography
                variant="h5"
                sx={{ color: "white", textAlign: "right" }}
              >
                {v.title}
              </Typography>
              {/* <ListItemText
                sx={{ textAlign: "right" }}
                style={{ color: "white" }}
                primary={v.title}
              /> */}
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default ListItemApp;
