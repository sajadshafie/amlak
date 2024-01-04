import * as React from "react";

import { Pagination, useTheme, IconButton } from "@mui/material";
//MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import { Grid, Typography, Button } from "@mui/material";
import { utils as XLSXUtils, writeFile } from "xlsx";
//Loading

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
//styles
import style from "./style.module.scss";

//Status fild with Style
import Global from "@/global";

//Box Filter  table
import FilterTable from "./Table/FillterTable";
import Process from "./process";
import IconAction from "./Table/iconAction";

type propsType = {
  rows: object[];
  lables: string[];
  typeColor: string;
  widthBtn: string;
  isLoading: string;
  handleAction: (
    item: any,
    ind: number,
    content: any,
    data: any,
    index: number
  ) => void;
  onPagination: (e: any, value: number) => void;
  totalPage: number;
  buttonDotted: boolean;
  isPaginate: boolean;
  page: number;
};

const AppTable: React.FC<Partial<propsType>> = (props) => {
  const borderRadius = "12";
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const onAction = (
    item: any,
    ind: number,
    content: any,
    data: any,
    index: number
  ) => {
    props.handleAction && props.handleAction(item, ind, content, data, index);
  };

  //Class Render For Status
  const classRender = () => {
    let res;
    // style[`${props.typeColor}btn_txt`]
    // _btn_txt
    switch (props.typeColor) {
      case "success":
        res = style.success_btn_txt;
        break;
      case "danger":
        res = style.danger_btn_txt;
        break;
      case "orange":
        res = style.orange_btn_txt;
        break;
      case "primary":
        res = style.primary_btn_txt;
        break;
    }
    return res;
  };
  //Render Text Button
  const buttonRender = (content: any, data: any, index: number) => {
    return (
      <TableCell
        key={index}
        sx={{ width: props.widthBtn }}
        className={classRender()}
        // onClick={() => onClick(content, data, index)}
        align="right"
      >
        <Grid
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          {content.map((v: any, i: number) => {
            return (
              <Button
                key={i}
                variant="outlined"
                onClick={() => onAction(v, i, content, data, index)}
              >
                {v.name}
              </Button>
            );
          })}
        </Grid>
      </TableCell>
    );
  };

  //Action Evry Row With Dotted With Popup open and Show two icon edit and Remove
  const buttonDottedRender = (content: any, data: any, index: number) => {
    return (
      <TableCell
        style={{
          width: "24px",
          height: "100%",
          cursor: "pointer",
          position: "relative",
        }}
        key={index}
        sx={{ width: props.widthBtn }}
        className={classRender()}
        align="right"
      >
        <IconAction
          onAction={(type) => onAction(type, index, content, data, index)}
        />
      </TableCell>
    );
  };

  //render row with items
  function getKeyByValue(object: any, value: string) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  //Render Every Row
  const itemHandler = (v: any, i: number) => {
    let res = [];
    for (let x in v) {
      if (getKeyByValue(v, v[x]) == "button") {
        res.push(
          props.buttonDotted
            ? buttonDottedRender(v.button, v, i)
            : buttonRender(v.button, v, i)
        );
      } else {
        if (getKeyByValue(v, v[x]) == "status") {
          res.push(
            <TableCell rowSpan={1} align="right">
              {Global.statusHandler(v[x].type, v[x].content)}
            </TableCell>
          );
        } else if (getKeyByValue(v, v[x]) == "none") {
        } else {
          res.push(
            <TableCell key={i} rowSpan={1} align="right">
              <Typography sx={{ fontWeight: "400" }} variant="h5number">
                {v[x]}
              </Typography>
            </TableCell>
          );
        }
      }
    }
    const result = res.map((item, index) => {
      return <React.Fragment key={index}>{item}</React.Fragment>;
    });
    return result;
  };

  const handleExcelDownload = () => {
    //@ts-ignore
    const myarr: any[] =
      props.rows &&
      props.rows
        .filter((v: any) => v)
        .map((v: any, i: number) => {
          if (v) {
            delete v?.none;
            delete v?.button;
            if (v.status) {
              v.status = v.status.content;
            }
            return v;
          }
        });

    const worksheet = XLSXUtils.json_to_sheet(myarr);
    const workbook = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, "my-file.xlsx", { bookType: "xlsx", type: "buffer" });
    saveAsExcel(
      writeFile(workbook, "my-file.xlsx", { bookType: "xlsx", type: "buffer" }),
      "my-table.xlsx"
    );
  };

  const saveAsExcel = (buffer: any, fileName: any) => {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    //@ts-ignore
    if (typeof window.navigator.msSaveBlob === "function") {
      // For IE and Edge
      //@ts-ignore
      window?.navigator?.msSaveBlob(data, fileName);
    } else {
      const url = window.URL.createObjectURL(data);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  return (
    <Grid container width={"100%"}>
      {/* Start Table Container */}
      <TableContainer
        sx={{ width: { xs: "97%", sm: "100%" }, margin: "8px auto" }}
        //@ts-ignore
        style={{ borderRadius: borderRadius, mb: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "white" }}>
            <TableRow>
              {props.lables &&
                props.lables.map((v: any, i: number) => {
                  return (
                    <TableCell
                      key={i}
                      align={v.toLowerCase() == "actions" ? "center" : "right"}
                      colSpan={v.toLowerCase() == "actions" ? 2 : 1}
                      sx={{
                        borderBottom: "none",
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      {v}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>

          {props.isLoading !== "data" || props.rows?.length == 0 ? (
            <Process loading={props.isLoading} data={props.rows} />
          ) : (
            <TableBody>
              {props.rows &&
                props.rows.map((v, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: i % 2 ? "#F6F9FB;" : "#ffff",
                      marginBottom: "20px",
                    }}
                  >
                    {itemHandler(v, i)}
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {/* DOWNLOAD BUTTONS Excells */}
      <Grid container my={2} justifyContent={"space-between"}>
        <Grid item xs={5}>
          {props.isPaginate && (
            <Pagination
              onChange={props.onPagination}
              variant="outlined"
              count={props.totalPage}
              color="primary"
              defaultPage={props.page}
            />
          )}
        </Grid>

        {props.isLoading == "data" && (
          <Grid
            item
            xs={3}
            display="flex"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            {/* Excel download file */}
            <Button
              sx={{ borderRadius: "12px" }}
              variant="outlined"
              color="primary"
              onClick={handleExcelDownload}
            >
              دانلود اکسل
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AppTable;
