import { createTheme } from "@mui/material";

export default createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    background: {
      default: "#f2f4f3",
    },
    primary: {
      main: "#b63120",
    },
  },
});
