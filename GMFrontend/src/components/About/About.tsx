import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import ScrollFadeIn from "../animations/ScrollFadeIn";
const About = () => {
  return (
    <>
      <ScrollFadeIn>
        <h2 className="text-white text-[3rem] font-bold mt-[5rem] pl-[1rem] md:text-center md:mt-[10rem}">
          About
        </h2>

        <p className="pl-[1rem] mb-[1rem] text-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          voluptatum ratione facilis quaerat. Blanditiis doloribus natus autem
          aut, quae perspiciatis?
        </p>
      </ScrollFadeIn>
    </>
  );
};

export default About;
