import { createTheme } from "@mui/material";
import Poppins from "../../fonts/Poppins-Regular.ttf";

export const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    primary: {
      main: "#37517e",
      dark: "##023b6d",
    },
  },
  spacing: "8px",
  typography: {
    fontFamily: "Poppins",
    h4: {
      fontFamily: "Poppins",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face{
      font-family: 'Poppins';
      font-style: normal;
      font-weight:400;
      src: local('Poppins-Regular') url(${Poppins}) format('truetype');
      }
      `,
    },
  },
});
