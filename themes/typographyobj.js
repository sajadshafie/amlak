import colors from "../styles/pallete.module.scss";
const color = colors;
const theme = {
  colors: color,
  heading: color.grey900,
  paper: color.primaryLight,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey700,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  textLight: color.secondaryLight,
  menuSelected: color.secondaryLight,
  menuSelectedBack: color.selectedColor,
  divider: color.yellow100,
  menuColor: color.menuColor,
  grey300: color.grey300,
  yellow100: color.yellow100,
  blueMain: color.blueMain,
};
export const TypographyPalett = {
  direction: "rtl",
  fontFamily: "Iransans_number",
  h6w: {
    fontWeight: 700,
    color: theme.heading,
    fontSize: "0.75rem",
  },
  h8: {
    fontWeight: 500,
    color: theme.heading,
    fontSize: "12px",
  },
  h7: {
    fontWeight: 500,
    color: theme.heading,
    fontSize: "14px",
  },
  h6: {
    fontWeight: 500,
    color: theme.heading,
    fontSize: "0.75rem",
  },
  h5w: {
    fontSize: "0.875rem",
    color: theme.heading,
    fontWeight: 600,
  },
  h5number: {
    fontFamily: "iransans_number",
    fontSize: "0.875rem",
    color: theme.heading,
    fontWeight: 600,
  },
  h5: {
    lineHeight: 1.5,
    fontSize: "0.875rem",
    color: theme.heading,
    fontWeight: 500,
  },
  h4: {
    fontSize: "1rem",
    color: theme.heading,
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.25rem",
    color: theme.heading,
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.5rem",
    color: theme.heading,
    fontWeight: 700,
  },
  h1: {
    fontSize: "2.125rem",
    color: theme.heading,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: theme.textDark,
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 400,
    color: theme.darkTextSecondary,
  },
  caption: {
    fontSize: "0.75rem",
    color: theme.darkTextSecondary,
    fontWeight: 400,
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.334em",
  },
  body2: {
    letterSpacing: "0em",
    fontWeight: 400,
    lineHeight: "1.5em",
    color: theme.darkTextPrimary,
  },
  button: {
    textTransform: "capitalize",
  },
  customInput: {
    marginTop: 1,
    marginBottom: 1,
    "& > label": {
      top: 23,
      left: 0,
      color: theme.grey500,

      '&[data-shrink="false"]': {
        top: 5,
      },
    },
    "& > div > input": {
      padding: "30.5px 14px 11.5px !important",
    },
    "& legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
    },
  },
  mainContent: {
    backgroundColor: theme.background,
    width: "100%",
    minHeight: "calc(100vh - 102px)",
    flexGrow: 1,
    padding: "20px",
    marginTop: "88px",
    marginRight: "20px",
    borderRadius: `${theme?.customization?.borderRadius}px`,
  },
  menuCaption: {
    fontSize: "0.875rem",
    fontWeight: 700,
    color: theme.grey300,
    padding: "6px",
    textTransform: "capitalize",
    marginTop: "10px",
  },
  subMenuCaption: {
    fontSize: "0.6875rem",
    fontWeight: 500,
    color: theme.grey500,
    textTransform: "capitalize",
  },
  menuItem: {
    fontSize: "0.875rem",
    color: theme.textLight,
    fontWeight: 500,
  },
  menuItemSelected: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.334em",
  },
  commonAvatar: {
    cursor: "pointer",
    borderRadius: "8px",
  },
  smallAvatar: {
    width: "22px",
    height: "22px",
    fontSize: "1rem",
  },
  mediumAvatar: {
    width: "34px",
    height: "34px",
    fontSize: "1.2rem",
  },
  largeAvatar: {
    width: "44px",
    height: "44px",
    fontSize: "1.5rem",
  },
};
