import React from "react";
import Nav from "../components/navbar/Nav";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="text-text">
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
    </>
  );
};

export default Home;
