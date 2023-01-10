import React from "react";
import { View } from "../Components";
import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import avatar from "../assets/avatar.jpg";

const Welcome: React.FC = () => {
  return (
    <View sx={{ backgroundColor: "#b63120" }}>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          alt="Davide DC"
          src={avatar}
          sx={{ height: 200, width: 200, margin: "0 auto" }}
        />
        <Typography variant="h3">Davide Di Criscito</Typography>
        <Typography variant="h4" gutterBottom>
          Artisan, full-stack web developer.
        </Typography>
        <Typography variant="h6">
          Currently Artisan at <strong>La Rapida di Davide Di Criscito</strong>,
          soon-to-be a full-stack web developer.
        </Typography>
      </Box>
    </View>
  );
};

export default Welcome;
