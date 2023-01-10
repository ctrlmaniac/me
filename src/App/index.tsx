import React from "react";

import { Wallpaper } from "../Components";

// Sections
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import About from "./About";
import Tools from "./Tools";
import Works from "./Works";
import Footer from "./Footer";

// Wallpapers
import wallpaper1 from "../assets/wallpapers/house.webp";
import wallpaper2 from "../assets/wallpapers/mountains.webp";
import wallpaper3 from "../assets/wallpapers/maki.webp";
import wallpaper4 from "../assets/wallpapers/mountains-2.webp";

const App: React.FC = () => {
  return (
    <>
      <NavBar />

      <Welcome />

      <Wallpaper src={wallpaper1} alt="A house" />

      <div id="about">
        <About />
      </div>

      <Wallpaper src={wallpaper2} alt="A mount" />

      <div id="tools">
        <Tools />
      </div>

      <Wallpaper src={wallpaper3} alt="A friend's dog" />

      <div id="works">
        <Works />
      </div>

      <Wallpaper src={wallpaper4} alt="A mount" />

      <Footer />
    </>
  );
};

export default App;
