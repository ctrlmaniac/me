import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandGmail,
  IconBrandDocker,
} from "@tabler/icons";

export default function Socials() {
  return (
    <Box sx={{ mb: 2 }}>
      <IconButton
        color="primary"
        aria-label="facebook"
        href="https://www.facebook.com/deivdeivdeiv"
        target="_blank"
      >
        <IconBrandFacebook />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="instagram"
        href="https://www.instagram.com/meldinco/"
        target="_blank"
      >
        <IconBrandInstagram />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="pinterest"
        href="https://www.pinterest.com/meldinco/"
        target="_blank"
      >
        <IconBrandPinterest />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="linkedin"
        href="https://www.linkedin.com/in/dcdavide/"
        target="_blank"
      >
        <IconBrandLinkedin />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="github"
        href="https://github.com/ctrlmaniac"
        target="_blank"
      >
        <IconBrandGithub />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="docker"
        href="https://hub.docker.com/u/ctrlmaniac"
        target="_blank"
      >
        <IconBrandDocker />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="email"
        href="mailto:davide.dicriscito@gmail.com"
      >
        <IconBrandGmail />
      </IconButton>
    </Box>
  );
}
