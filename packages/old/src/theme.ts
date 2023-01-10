import { createTheme } from "@mui/material";

export default createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    background: {
      default: "#f2f4f3",
      paper: "#4f7cac",
    },
    primary: {
      main: "#a14a76",
    },
    secondary: {
      main: "#c9cebd",
    },
  },
});
