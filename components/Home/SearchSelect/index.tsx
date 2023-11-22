import Appbutton from "@/common/Appbutton";
import Appselect from "@/common/Appselect";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { city } from "@/global/city";
import { typePropery } from "./typeProperty";
import { meter } from "./meter";
const SearchSelect: React.FC = (props) => {
  const query = useMediaQuery("(min-width:650px)");
  const sxSelect = {
    width: "150px",
    mx: 2,
  };
  console.log(query);
  const handleSearch = () => {};
  return (
    <Grid
      sx={{
        background: "white",
        p: 2,
        borderRadius: query ? 50 : "12px",
        width: "fit-content",
      }}
      container
      justifyContent={"space-between"}
    >
      <Appselect
        variant={"standard"}
        size={"small"}
        sx={{
          width: query ? "150px" : "100%",
          mx: query ? 2 : 0,
        }}
        label="شهر"
        options={city}
      />

      <Appselect
        variant={"standard"}
        size={"small"}
        sx={{
          width: query ? "150px" : "100%",
          mx: query ? 2 : 0,
        }}
        label="نوع ملک"
        options={typePropery}
      />

      <Appselect
        variant={"standard"}
        size={"small"}
        sx={{
          width: query ? "150px" : "100%",
          mx: query ? 2 : 0,
        }}
        label="متراژ"
        options={meter}
      />

      <Appbutton
        sx={{
          px: 4,
          py: 2,
          borderRadius: 50,
          width: !query && "100%",
          mt: !query && 2,
        }}
        variant="contained"
        onClick={handleSearch}
      >
        جستجو
      </Appbutton>
    </Grid>
  );
};

export default SearchSelect;
