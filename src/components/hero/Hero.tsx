import HeroText from "./HeroText";

import HeroPicture from "./HeroPicture";
const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:mt-[3rem]">
        <HeroText />
        <HeroPicture />
      </div>
    </>
  );
};

export default Hero;
