import { Paper, Typography, Container, Box, Chip, Link } from "@mui/material";
import React from "react";
import { View } from "../Components";

const Welcome: React.FC = () => {
  return (
    <Paper square elevation={0}>
      <View>
        <Container>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" component="h1">
              Davide Di Criscito
            </Typography>
            <Typography variant="h3" component="p">
              Artisan, full-stack web developer.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ mb: 6 }}>
              Currently Artisan at{" "}
              <strong>La Rapida di Davide Di Criscito</strong>, soon-to-be a
              full-stack web developer.
            </Typography>
            <Chip color="primary" label="HTML" />{" "}
            <Chip color="primary" label="CSS" />{" "}
            <Chip color="primary" label="JavaScript" />{" "}
            <Chip color="primary" label="Python" />{" "}
            <Link href="#tools" color="secondary">
              more...
            </Link>
          </Box>
        </Container>
      </View>
    </Paper>
  );
};

export default Welcome;
