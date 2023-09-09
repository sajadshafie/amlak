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
import ApartmentIcon from "@mui/icons-material/Apartment";

type itemTypes = {
  title: string;
  link: string;
  id: number;
  icon: React.ReactNode;
};

type propsType = {
  active: number;
};

const ListItemApp: React.FC<Partial<propsType>> = (props) => {
  const theme = useTheme();
  const Items: itemTypes[] = [
    {
      title: "زمین",
      link: "/provider/earth",
      id: 1,
      icon: <MailIcon sx={{ color: "white" }} />,
    },
    {
      title: "ویلایی و اپارتمان",
      link: "/apartment",
      id: 2,
      icon: <ApartmentIcon sx={{ color: "white" }} />,
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
          <ListItem
            sx={{
              backgroundColor:
                props.active == v.id ? theme.palette.primary.yellow300 : null,
              borderRadius: "12px",
            }}
            disablePadding
            key={v.id}
          >
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
