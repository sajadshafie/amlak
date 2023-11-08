import React from "react";
import { TableBody, useTheme, TableRow, TableCell } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DangerousIcon from "@mui/icons-material/Dangerous";

type propsTypes = {
  loading: string;
};

const Process: React.FC<Partial<propsTypes>> = (props) => {
  const theme = useTheme();
  return (
    <TableBody style={{ marginTop: 10, height: 250, position: "relative" }}>
      <TableRow
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TableCell
          style={{
            borderBottom: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props.loading == "loading" ? (
            <>
              <CircularProgress size={28} sx={{ marginBottom: "10px" }} />
              <span style={{ fontSize: 12, color: theme.palette.grey[500] }}>
                در حال بارگذاری اطلاعات
              </span>
            </>
          ) : (
            <>
              <DangerousIcon
                size={35}
                sx={{ marginBottom: "10px", color: theme.palette.error.main }}
              />
              <span style={{ fontSize: 12, color: theme.palette.grey[500] }}>
                خطا در پردازش اطلاعات
              </span>
            </>
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Process;
