import Appbutton from "@/common/Appbutton";
import Appselect from "@/common/Appselect";
import { Grid } from "@mui/material";
import React from "react";
import { city } from "@/global/city";
import { typePropery } from "./typeProperty";
import { meter } from "./meter";
const SearchSelect: React.FC = (props) => {
  const sxSelect = {
    width: "150px",
    mx: 2,
  };
  return (
    <Grid
      sx={{
        background: "white",
        p: 2,
        borderRadius: 50,
        width: "fit-content",
      }}
      container
    >
      <Appselect
        variant={"standard"}
        size={"small"}
        sx={sxSelect}
        label="شهر"
        options={city}
      />

      <Appselect
        variant={"standard"}
        size={"small"}
        sx={sxSelect}
        label="نوع ملک"
        options={typePropery}
      />
      <Appselect
        variant={"standard"}
        size={"small"}
        sx={sxSelect}
        label="متراژ"
        options={meter}
      />
      <Appbutton sx={{ px: 4, py: 2, borderRadius: 50 }} variant="contained">
        جستجو
      </Appbutton>
    </Grid>
  );
};

export default SearchSelect;
