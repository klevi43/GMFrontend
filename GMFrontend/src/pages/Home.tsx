import React from "react";
import Nav from "../components/navbar/Nav";
import Hero from "../components/hero/Hero";
import About from "../components/About/About";
const Home = () => {
  return (
    <div className="text-text bg-background">
      <Nav />
      <Hero />
      <div className="py-[1rem]">
        <About />
      </div>
    </div>
  );
};

export default Home;
