import { Grid, Pagination } from "@mui/material";
import React from "react";
import ItemTable from "./item";
import { adviserType } from "@/types/addvertise";
import ProcessPage from "../ProcessPage";
type propstype = {
  isLoading: string;
  totalPage: number;
  data: any[];
  onPagination: (e: any, value: number) => void;
  page: number;
  onAction: (
    type: string,
    i: number,
    content: any,
    value: adviserType,
    index: any
  ) => void;
};

const ListTable: React.FC<Partial<propstype>> = (props) => {
  return (
    <Grid mt={2}>
      {props.isLoading !== "data" ? (
        <ProcessPage loading={props.isLoading} />
      ) : (
        <Grid container>
          {props.data?.map((v: adviserType, i: number) => {
            return (
              <Grid item xs={12} key={i} mb={2}>
                <ItemTable
                  onAction={(type) =>
                    props.onAction && props.onAction(type, i, null, v, null)
                  }
                  title={v.title}
                  price={v.price}
                  meterage={v.meterage}
                  status={v.status}
                />
              </Grid>
            );
          })}
        </Grid>
      )}

      <Pagination
        onChange={props.onPagination}
        variant="outlined"
        count={props.totalPage}
        color="primary"
        defaultPage={props.page}
      />
    </Grid>
  );
};

export default ListTable;
