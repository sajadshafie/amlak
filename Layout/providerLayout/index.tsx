import { Grid, Typography, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppTooltip from "@/libs/Tooltip";
import AppDrawer from "./drawer";
import AppModal from "@/common/AppModal";
import { context } from "@/context";
import BackTo from "@/libs/BackTo";
type providerAppType = {
  username: string;
  children: React.ReactNode;
  active: boolean;
  confirmModal: boolean;
};

const ProviderLayout: React.FC<Partial<providerAppType>> = (props) => {
  const { state, setState } = useContext(context);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const userDetail = state?.userDetail;
  console.log(userDetail);
  return (
    <Grid>
      <Grid
        id="header"
        sx={{
          backgroundColor: theme.palette.grey[200],
          px: 4,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MenuIcon
          sx={{ color: theme.palette.primary.yellow300, cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Grid display={"flex"} alignItems={"center"}>
          {/* <Grid>
            <AppTooltip title="اعلان ها">
              <NotificationsIcon
                sx={{
                  color: theme.palette.primary.yellow300,
                  ml: 2,
                }}
              />
            </AppTooltip>
          </Grid> */}
          <PersonIcon
            sx={{
              color: theme.palette.primary.yellow300,
              ml: 2,
            }}
          />

          <Typography variant="h6">{userDetail.username}</Typography>
        </Grid>
      </Grid>
      <Grid display={"flex"} id="content">
        <AppDrawer open={isOpen} active={props.active} />
        <Grid
          width={"100%"}
          sx={{
            p: 2,
          }}
        >
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProviderLayout;
