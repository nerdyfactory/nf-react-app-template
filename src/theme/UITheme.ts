import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey, green, orange } from '@material-ui/core/colors';
import { Color } from 'types';

const buildThemeDefault = (color: Color) =>
  createMuiTheme({
    palette: {
      primary: {
        main: color.primary || blue[`A100`],
      },
      secondary: {
        main: color.secondary || grey[`A100`],
      },
      success: {
        main: color.success || green[`A100`],
      },
      background: {
        default: color.primary || blue[`A100`],
      },
      warning: {
        main: color.warning || orange[`A100`],
      },
    },
    typography: {
      // useNextVariants: true,
      h4: {
        fontWeight: 700,
        fontSize: `1.7em`,
      },
      h6: {
        fontSize: `1.1em`,
      },
      fontFamily: [
        `DM Sans`,
        `"Helvetica Neue"`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
      ].join(`,`),
    },
    overrides: {
      MuiButton: {
        root: {
          // fontFamily: `"Roboto", sans-serif`,
          // color: color.defaultText,
        },
      },
      MuiInput: {
        root: {
          // fontFamily: `DM Sans, sans-serif`,
          // color: color.defaultText,
        },
      },
    },
  });

export default buildThemeDefault;
