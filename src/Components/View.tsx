import React from "react";
import { Box } from "@mui/material";

interface Props {
  sx?: {};
  children: JSX.Element[] | JSX.Element;
}

const View: React.FC<Props> = ({ sx, children }) => {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeItems: "center", ...sx }}>
      {children}
    </Box>
  );
};

export default View;
