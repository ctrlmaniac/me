import React from "react";
import { View } from "../Components";
import { Avatar, Box, Chip, Link, Paper, Typography } from "@mui/material";
import avatar from "../assets/avatar.jpg";

const Welcome: React.FC = () => {
  return (
    <View>
      <Box sx={{ textAlign: "center" }}>
        <Avatar
          alt="Davide DC"
          src={avatar}
          sx={{ height: 200, width: 200, margin: "0 auto" }}
        />
        <Typography variant="h3">Davide Di Criscito</Typography>
        <Typography variant="h4" gutterBottom>
          Full-Stack web developer.
        </Typography>
        <Typography gutterBottom>
          Eager to learn new things, always with one new project in mind,
          passionate about programming with computers.
        </Typography>
        <Box mt={2}>
          <Chip color="primary" label="JavaScript" />{" "}
          <Chip color="primary" label="Python" />{" "}
          <Chip color="primary" label="Java" />{" "}
          <Link href="#tools" color="secondary">
            more...
          </Link>
        </Box>
      </Box>
    </View>
  );
};

export default Welcome;
