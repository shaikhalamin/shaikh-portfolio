import React from "react";
import AppNavbar from "./partials/AppNavbar";
import AppJumbotron from "./partials/AppJumbotron";
import Skills from "./partials/Skills";
import HomeAbout from "./partials/HomeAbout";
import Experiences from "./Experiences";

const Home = () => {
  return (
    <div className="App">
      <AppNavbar />
      <AppJumbotron />
      <HomeAbout />
      <Experiences />
      <Skills />
    </div>
  );
}

export default Home;
