import HeroText from "./HeroText";
import FadeIn from "../animations/FadeIn";

import HeroPicture from "./HeroPicture";
const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <HeroText />
        <HeroPicture />
      </div>
    </>
  );
};

export default Hero;
