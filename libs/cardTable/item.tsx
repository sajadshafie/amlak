import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { adviserType } from "@/types/addvertise";
import Global from "@/global";
import IconAction from "@/common/Apptable/Table/iconAction";
//icon

interface cardTabletype extends adviserType {
  onAction: (type: string) => void;
}

const ItemTable: React.FC<Partial<cardTabletype>> = (props) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        // boxShadow: "2px 13px 26px -9px rgba(61,61,61,0.47)",

        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: "12px",
        p: 1,
      }}
    >
      <Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid display={"flex"} mb={2}>
          <Typography ml={1} variant="caption" sx={{ fontSize: "14px" }}>
            نام ملک :
          </Typography>
          <Typography variant="h5">{props.title}</Typography>
        </Grid>
        <IconAction
          onAction={(type) => props.onAction && props.onAction(type)}
        />
      </Grid>
      <Grid container mb={2}>
        <Typography ml={1} variant="caption" sx={{ fontSize: "14px" }}>
          متراژ :
        </Typography>
        <Typography variant="h5">{props.meterage} متر</Typography>
      </Grid>
      <Grid container mb={2}>
        <Typography ml={1} variant="caption" sx={{ fontSize: "14px" }}>
          منطقه :
        </Typography>
        <Typography variant="h5">تهران - شهرری</Typography>
      </Grid>
      <Grid container mb={2}>
        <Typography ml={1} variant="caption" sx={{ fontSize: "14px" }}>
          قیمت :
        </Typography>
        <Typography variant="h5">{props.price} تومان</Typography>
      </Grid>
      <Grid container alignItems={"center"}>
        <Typography ml={1} variant="caption" sx={{ fontSize: "14px" }}>
          وضعیت :
        </Typography>
        {Global.statusHandler(
          Global.statusResult(props.status.id)?.type,
          Global.statusResult(props.status.id)?.status
        )}
        {/* <Global.statusHandler
          type={Global.statusResult(props.status.id)?.type}
          content={Global.statusResult(props.status.id)?.status}
        /> */}
      </Grid>
    </Grid>
  );
};

export default ItemTable;
