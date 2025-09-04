import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Message from "../components/Message";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Skills/>
      <Message/>
      <Footer/>
    </div>
  )
}

export default Home
