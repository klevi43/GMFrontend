import React from "react";
import Nav from "../components/navbar/Nav";
import Hero from "../components/hero/Hero";
import About from "../components/About/About";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div className="text-text">
      <Nav />
      <div className="place-items-center mx-auto max-w-[1150px]">
        <Hero />
      </div>
      <div className="py-[1rem] mx-auto max-w-[750px]">
        <About />
      </div>
      <div className="place-items-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
