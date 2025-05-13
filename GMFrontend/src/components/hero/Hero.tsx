import HeroText from "./HeroText";
import FadeIn from "../animations/FadeIn";

import HeroPicture from "./HeroPicture";
const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-1 place-items-center md:grid-cols-2 max-w-[1150px]">
        <HeroText />
        <HeroPicture />
      </div>
    </>
  );
};

export default Hero;
