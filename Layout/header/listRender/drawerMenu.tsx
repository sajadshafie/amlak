import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material";
import Items from "../items";
import CloseIcon from "@mui/icons-material/Close";

type propsType = {
  onClose?: () => void;
  isOpen?: boolean;
  active?: number;
};

type Menu = {
  title: string;
  id: number;
  link: string;
};

const DrawerMenu: React.FC<propsType> = (props) => {
  const theme = useTheme();
  return (
    <div>
      <Drawer
        anchor={"top"}
        open={props.isOpen}
        onClose={props.onClose && props.onClose}
      >
        <List
          sx={{
            width: "100%",
            height: "100%",
            background: "white",
            direction: "ltr",
            mt: 2,
          }}
        >
          
          {Items.map((v: Menu, index: number) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                background:
                  props.active == v.id && theme.palette.primary.yellow300,
              }}
            >
              <ListItemButton>
                <ListItemText sx={{ textAlign: "right" }} primary={v.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
