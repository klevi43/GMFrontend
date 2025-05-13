import React from "react";
import FadeIn from "../animations/FadeIn";
import heroImg from "../../assets/pictures/pexels-marcuschanmedia-18060023.jpg";
import { div } from "motion/react-client";
const HeroPicture = () => {
  return (
    <div className="my-auto">
      <FadeIn delay={0.95} duration={0.95} from={75}>
        <div>
          <img className="w-fit px-[1rem]" src={heroImg} alt="" />
        </div>
      </FadeIn>
    </div>
  );
};

export default HeroPicture;
