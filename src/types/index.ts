export type MUIColorPallete = {
  primary: Color;
  secondary: Color;
  default: Color;
};

export type MUIColor = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type Color = {
  light?: string;
  main?: string;
  dark?: string;
  contrastText?: string;
  primary?: string;
  secondary?: string;
  success?: string;
  default?: string;
  warning?: string;
  danger?: string;
};
