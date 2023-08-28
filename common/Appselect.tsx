import React from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import themeTypography from "@/themes/typography";
import ColorTypography from "@/themes/color";
import optionType from "@/types/option";

type Typeselect = {
  handleChange: () => void;
  value: string;
  options: optionType[];
  label: string;
  sx: React.CSSProperties | object;
};
const theme = createTheme({
  direction: "rtl",
  typography: themeTypography(ColorTypography),
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const Appselect: React.FC<Partial<Typeselect>> = (props) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <FormControl variant="standard" sx={props.sx}>
          <InputLabel id="demo-simple-select-standard-label">
            {props.label}
          </InputLabel>
          <Select
            native={false}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={props.value}
            onChange={props.handleChange}
            label={props.label}
          >
            {props.options?.map((v: optionType, i: number) => {
              return <MenuItem value={v.value}>{v.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Appselect;
