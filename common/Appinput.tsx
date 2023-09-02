import React from "react";
import { TextField } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import themeTypography from "@/themes/typography";
import ColorTypography from "@/themes/color";
import { createTheme, ThemeProvider } from "@mui/material/styles";
type Props = {
  label: string;
  variant: "standard" | "outlined" | "filled";
  value: string;
  onChange: () => void;
  sx: React.CSSProperties | object;
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
const Appinput: React.FC<Partial<Props>> = (props) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themes}>
        <TextField
          id="outlined-basic"
          label={props.label}
          variant={props.variant}
          value={props.value}
          onChange={props.onChange}
          sx={props.sx}
          // InputLabelProps={{
          //   style: { color: "red" },
          // }}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Appinput;
