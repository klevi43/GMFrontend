import React from "react";
import { motion } from "motion/react";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        >
          <HeroText />
        </motion.div>
        <motion.div
          className="w-[100%] flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <div className="bg-blue-400 h-[20rem] w-[95%]">picture</div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
