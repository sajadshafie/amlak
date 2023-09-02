import colors from "../styles/pallete.module.scss";

export default function ColorTypography() {
  const color = colors;
  const themeOption = {
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
    divider: color.grey700,
    menuColor: color.menuColor,
    grey300: color.grey300,
  };

  return themeOption;
}
