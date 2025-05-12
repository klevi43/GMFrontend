import React from "react";
import { motion } from "motion/react";
import HeroText from "./HeroText";
import FadeIn from "../animations/FadeIn";
import heroImg from "../../assets/pictures/pexels-marcuschanmedia-18060023.jpg";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        {/* <FadeIn delay={0.15} duration={1} from={75}> */}
        <HeroText />
        {/* </FadeIn> */}
        <FadeIn delay={0.95} duration={0.95} from={75}>
          <div>
            <img className="w-fit px-[1rem]" src={heroImg} alt="" />
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Hero;
