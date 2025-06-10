import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import ScrollFadeIn from "../animations/ScrollFadeIn";
import aboutImg1 from "../../assets/pictures/pexels-518880552-16300776.jpg";
import aboutImg2 from "../../assets/pictures/pexels-leonardho-1552249.jpg";
const About = () => {
  return (
    <>
      <ScrollFadeIn>
        <h2 className="text-white text-[3rem] font-bold mt-[5rem] pl-[1rem] md:text-center md:mt-[10rem}">
          About
        </h2>

        <p className="px-[1rem] mb-[1rem] text-[1.5rem] md:text-center">
          Whether you're an experienced lifter or just starting out, Growth
          Mindset offers you a convenient and easy to use way to log your
          workouts and track your progress.
        </p>
        <div className="px-[1rem] mx-auto">
          <img className="w-fit" src={aboutImg1} alt="" />
        </div>
      </ScrollFadeIn>
    </>
  );
};

export default About;
