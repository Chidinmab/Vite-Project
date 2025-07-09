import React from "react";
import Nav from "../component/Nav";
import Hero from "../component/Hero";
import SportsCardSelector from "../component/SportsCardSelector";
import Register from "../component/Register";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SportsCardSelector />
      <Register />
    </>
  );
};

export default Home;