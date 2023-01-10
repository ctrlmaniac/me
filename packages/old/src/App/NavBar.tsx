import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";

const NavBar: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.common.white,
      }}
    >
      <Toolbar sx={{ gap: "12px" }}>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          Davide DC
        </Typography>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#tools">
          Tools
        </Button>
        <Button color="inherit" href="#works">
          Works
        </Button>
        <IconButton
          color="inherit"
          href="https://linkeding.com/in/dcdavide"
          target="_blank"
        >
          <IconBrandLinkedin />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/ctrlmaniac"
          target="_blank"
        >
          <IconBrandGithub />
        </IconButton>
        <IconButton color="inherit" href="mailto:davide.dicriscito@gmail.com">
          <IconMail />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
