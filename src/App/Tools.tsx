import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { View } from "../Components";

export default function Tools() {
  return (
    <View>
      <Container>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Tools
          </Typography>

          <Typography>
            I develop using <strong>Python</strong> and <strong>Java</strong>.
            My frameworks of choice are <strong>Django</strong> and{" "}
            <strong>Spring Boot</strong>. I also develop front-end applications
            using <strong>React</strong> with <strong>Typescript</strong>.
            Finally, I deploy on VPS running <strong>Ubuntu</strong>.
          </Typography>
          <Typography>
            My IDE of choice is <strong>VSCode</strong>.
          </Typography>
          <Typography>
            I obviously store all my source code on <strong>Github</strong>.
          </Typography>
          <Typography>
            I'm learning to deliver my applications with <strong>docker</strong>{" "}
            too!
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Chip color="primary" label="python" />{" "}
          <Chip color="primary" label="django" />{" "}
          <Chip color="primary" label="react" />{" "}
          <Chip color="primary" label="typescript" />{" "}
          <Chip color="primary" label="java" />{" "}
          <Chip color="primary" label="spring boot" />{" "}
          <Chip color="primary" label="golang" />{" "}
          <Chip color="primary" label="ubuntu" />{" "}
          <Chip color="primary" label="VSCode" />{" "}
          <Chip color="primary" label="Git" />{" "}
          <Chip color="primary" label="GitHub" />{" "}
          <Chip color="primary" label="Docker" />{" "}
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography>
            When I code I like to use some tools that help me code better, such
            as: black, isort, prettier, commitizen, poetry, npm, yarn, lerna.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Chip color="secondary" label="black" />{" "}
          <Chip color="secondary" label="isort" />{" "}
          <Chip color="secondary" label="prettier" />{" "}
          <Chip color="secondary" label="commitizen" />{" "}
          <Chip color="secondary" label="poetry" />{" "}
          <Chip color="secondary" label="npm" />{" "}
          <Chip color="secondary" label="yarn" />{" "}
          <Chip color="secondary" label="lerna" />{" "}
          <Chip color="secondary" label="vite" />{" "}
        </Box>
      </Container>
    </View>
  );
}
