import React from "react";
import { Tooltip, Grid, IconButton, useTheme } from "@mui/material";

//icon
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

type propstype = {
  onAction: (type: string) => void;
};

const IconAction: React.FC<Partial<propstype>> = (props) => {
  const theme = useTheme();
  return (
    <Grid display="flex" alignItems="center">
      {
        <Tooltip title={"مشاهده جزییات"}>
          <Grid
            style={{ marginLeft: "25px" }}
            onClick={() => props.onAction && props.onAction("view")}
          >
            <IconButton>
              <RemoveRedEyeIcon
                sx={{
                  color: theme.palette.info.main,
                }}
              />
            </IconButton>
          </Grid>
        </Tooltip>
      }
      <Tooltip title={"تغییر"}>
        <Grid
          style={{ marginLeft: "25px" }}
          onClick={() => props.onAction && props.onAction("edit")}
        >
          <IconButton>
            <EditOutlinedIcon
              sx={{
                color: theme.palette.primary.yellow300,
              }}
            />
          </IconButton>
        </Grid>
      </Tooltip>
      <Tooltip title={"حذف"}>
        <Grid
          style={{ marginLeft: "25px" }}
          onClick={() => props.onAction && props.onAction("delete")}
        >
          <IconButton>
            <DeleteOutlineOutlinedIcon
              sx={{
                color: theme.palette.error.dark,
              }}
            />
          </IconButton>
        </Grid>
      </Tooltip>
    </Grid>
  );
};

export default IconAction;
