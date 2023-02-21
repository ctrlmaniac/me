import React from "react";
import { Typography, Container, Box, Chip } from "@mui/material";
import { View } from "../Components";

const About: React.FC = () => {
  return (
    <View>
      <Container>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography>
            I'm Davide Di Criscito, I was born on may 23rd 1990 in Brescia,
            Italy!
          </Typography>
          <Typography>I'm a full-stack web developer.</Typography>
          <Typography>
            I develop applications for the web including full front-end design.
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Chip label="hiking" /> <Chip label="photography" />{" "}
          <Chip label="coding" /> <Chip label="videogames" />{" "}
          <Chip label="movies" /> <Chip label="TV series" />{" "}
          <Chip label="reading" />
        </Box>
      </Container>
    </View>
  );
};

export default About;
