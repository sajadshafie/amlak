import * as React from "react";

import { Pagination } from "@mui/material";
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
import CircularProgress from "@mui/material/CircularProgress";

//XLSX Excel file

//styles
import style from "./style.module.scss";

//Status fild with Style
// import StatusHandler from 'components/GlobalRenders/StatusHandler';

//Box Filter  table
import FilterTable from "./Table/FillterTable";

type propsType = {
  rows: object[];
  lables: string[];
  typeColor: string;
  widthBtn: string;
  isLoading: boolean;
  handleAction: (
    item: any,
    ind: number,
    content: any,
    data: any,
    index: number
  ) => void;
  onPagination: () => void;
  totalPage: number;
  buttonDotted: boolean;
  isPaginate: boolean;
};

// {
//   rows,
//   lables,
//   typeColor = "primary",
//   widthBtn = "170px",
//   filters,
//   buttonDotted,
//   handleAction,

//   isLoading,
//   onPagination,
//   totalPage,
//   isPaginat,
// }

const AppTable: React.FC<Partial<propsType>> = (props) => {
  const borderRadius = "12";

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  //CallBack Function Show Detail Table
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
        <Grid display={"flex"} alignItems="center">
          {content.map((item: any, index: number) => {
            return (
              <Tooltip title={item.type}>
                <Grid
                  style={{ marginLeft: "25px" }}
                  onClick={() => onAction(item, index, content, data, index)}
                >
                  <img
                    className={style.icon}
                    src={process.env.PUBLIC_URL + item.icon}
                    key={index}
                    alt=""
                  />
                </Grid>
              </Tooltip>
            );
          })}
        </Grid>
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
          res.push(<TableCell rowSpan={1} align="right"></TableCell>);
        } else if (getKeyByValue(v, v[x]) == "none") {
        } else {
          res.push(
            <TableCell key={i} rowSpan={1} align="right">
              {v[x]}
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
    const myarr = props.rows
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
    if (typeof window.navigator.msSaveBlob === "function") {
      // For IE and Edge
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
                      sx={{ borderBottom: "none" }}
                    >
                      {v}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>

          {props.isLoading ? (
            <Grid item sx={{ mt: 2 }}>
              <CircularProgress />
            </Grid>
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
      <Grid container my={2}>
        <Grid item xs={2}>
          {props.isPaginate && (
            <Pagination
              onChange={props.onPagination}
              variant="outlined"
              count={props.totalPage}
            />
          )}
        </Grid>

        <Grid
          item
          xs={10}
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
      </Grid>
    </Grid>
  );
};

export default AppTable;
