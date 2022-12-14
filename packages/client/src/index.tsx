import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { LoadingScreen } from "./Components";
import theme from "./theme";

// App
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.Suspense fallback={<LoadingScreen />}>
      <App />
    </React.Suspense>
  </ThemeProvider>
);
