import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const View: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeItems: "center" }}>
      {children}
    </Box>
  );
};

export default View;
