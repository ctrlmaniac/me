import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: 3, paddingBottom: 3 }}>
      <Container>
        <Typography variant="h6" component="p" gutterBottom>
          Davide Di Criscito
        </Typography>
        <Socials />

        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            href="https://github.com/ctrlmaniac/ctrlmaniac.me"
            target="_blank"
          >
            inspect source-code
          </Button>
        </Box>

        <Button href="#top" variant="text">
          back to top
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
