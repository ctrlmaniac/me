import React from "react";
import View from "./View";
import { CircularProgress } from "@mui/material";

const LoadingScreen: React.FC = () => {
  return (
    <View>
      <CircularProgress />
    </View>
  );
};

export default LoadingScreen;
