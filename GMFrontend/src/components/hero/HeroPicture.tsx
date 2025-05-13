import React from "react";
import FadeIn from "../animations/FadeIn";
import heroImg from "../../assets/pictures/pexels-marcuschanmedia-18060023.jpg";
const HeroPicture = () => {
  return (
    <FadeIn delay={0.95} duration={0.95} from={75}>
      <div>
        <img className="w-fit px-[1rem]" src={heroImg} alt="" />
      </div>
    </FadeIn>
  );
};

export default HeroPicture;
