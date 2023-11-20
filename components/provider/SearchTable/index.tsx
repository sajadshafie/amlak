import Appbutton from "@/common/Appbutton";
import Appselect from "@/common/Appselect";
import { Grid, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import propsTypeSearch from "@/types/searchTable";

type propsType = {
  onChange: (e: ChangeEvent<HTMLInputElement>, type: string) => void;
  onSearch: () => void;
  searchField: propsTypeSearch;
};

const SearchTable: React.FC<Partial<propsType>> = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} ml={1} mb={1}>
        <TextField
          value={props.searchField?.title}
          sx={{ width: "100%" }}
          placeholder="نام ملک"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.onChange && props.onChange(e, "title")
          }
        />
      </Grid>
      <Grid item xs={12} sm={2.8} ml={1} mb={1}>
        <Appselect
          sx={{ width: "100%", height: "100%" }}
          fullWidth
          label="وضعیت"
          options={[
            {
              label: "تایید شده",
              value: 2,
            },
            {
              label: "رد شده",
              value: 3,
            },
            {
              label: "هیچکدام",
              value: null,
            },
          ]}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.onChange && props.onChange(e, "status")
          }
          value={props.searchField?.status}
        />
      </Grid>
      <Grid item xs={12} sm={2.8} ml={1} mb={1}>
        <Appselect
          value={props.searchField?.documentType}
          sx={{ width: "100%", height: "100%" }}
          fullWidth
          label="نوع ملک"
          options={[
            {
              label: "نامشخص",
              value: 0,
            },
            {
              label: "زمین",
              value: 1,
            },
            {
              label: "آپارتمان",
              value: 2,
            },
            {
              label: "هیچکدام",
              value: null,
            },
          ]}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.onChange && props.onChange(e, "documentType")
          }
        />
      </Grid>
      <Appbutton
        sx={{ width: { xs: "100%", sm: "fit-content" }, mb: 1 }}
        onClick={props.onSearch}
        variant="contained"
      >
        جست و جو
      </Appbutton>
    </Grid>
  );
};

export default SearchTable;
