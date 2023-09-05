import React from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@mui/material";
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
  message: string | React.ReactNode;
  error: boolean;
  fullWidth: boolean;
  variant: string | "filled" | "standard" | any;
};
const theme = ColorTypography();
const bgColor = theme.colors?.grey50;
const themes = createTheme({
  direction: "rtl",
  typography: themeTypography(ColorTypography),
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: theme.colors.primaryMain, // Set the desired label color when focused
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.colors.primaryMain, // Set the desired border color when focused
          },
          background: bgColor,
          // borderRadius: `${theme?.customization?.borderRadius}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.colors?.grey400,
          },
          "&:hover $notchedOutline": {
            borderColor: theme.colors?.primaryLight,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 400,
          background: bgColor,
          padding: "15.5px 14px",
          // borderRadius: `${theme?.customization?.borderRadius}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          // borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const Appselect: React.FC<Partial<Typeselect>> = (props) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themes}>
        <FormControl variant={props.variant} sx={props.sx}>
          <InputLabel id="demo-simple-select-standard-label">
            {props.label}
          </InputLabel>
          <Select
            sx={{
              ...props.sx,
              "& .MuiInputBase-input": {
                backgroundColor: "white",
                height: "40px",
              },
            }}
            native={false}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={props.value}
            onChange={props.handleChange}
            label={props.label}
            fullWidth={props.fullWidth}
          >
            {props.options?.map((v: optionType, i: number) => {
              return <MenuItem value={v.value}>{v.label}</MenuItem>;
            })}
          </Select>
          {props.error && <FormHelperText>{props.message}</FormHelperText>}
        </FormControl>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Appselect;
