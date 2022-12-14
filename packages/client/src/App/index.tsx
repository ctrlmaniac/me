import React from "react";
import { Box } from "@mui/material";

// Sections
import About from "./About";
import NavBar from "./NavBar";
import Tools from "./Tools";
import Welcome from "./Welcome";
import Works from "./Works";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div id="top">
        <Welcome />
      </div>

      <Box sx={{ textAlign: "center" }}>
        <img
          alt="a house"
          src={process.env.PUBLIC_URL + "/static/wallpapers/house.webp"}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </Box>

      <div id="about">
        <About />
      </div>

      <Box sx={{ textAlign: "center" }}>
        <img
          alt="mountains"
          src={process.env.PUBLIC_URL + "/static/wallpapers/mountains.webp"}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </Box>

      <div id="tools">
        <Tools />
      </div>

      <Box sx={{ textAlign: "center" }}>
        <img
          alt="My bf's dog"
          src={process.env.PUBLIC_URL + "/static/wallpapers/maki.webp"}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </Box>

      <div id="works">
        <Works />
      </div>

      <Box sx={{ textAlign: "center" }}>
        <img
          alt="mountains"
          src={process.env.PUBLIC_URL + "/static/wallpapers/mountains-2.webp"}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </Box>

      <Footer />
    </React.Fragment>
  );
};

export default App;
