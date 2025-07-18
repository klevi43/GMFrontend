import aboutImg1 from "../../assets/pictures/pexels-518880552-16300776.jpg";
import ScrollFadeIn from "../animations/ScrollFadeIn";
const About = () => {
  return (
    <>
      <ScrollFadeIn>
        <h2 className="text-white text-[3rem] font-bold mt-[2rem] md:mt-[5rem] pl-[1rem] md:text-center md:mt-[10rem}">
          About
        </h2>

        <p className="px-[1rem] mb-[1rem] text-[1.5rem] md:text-center">
          Whether you're an experienced lifter or just starting out, Growth
          Mindset gives you the tools to take control of your training. Log
          workouts with ease, monitor your progress over time, and stay
          consistent with a clean, intuitive interface built for real results.
        </p>
        <div className="px-[1rem] mx-auto">
          <img className="w-fit" src={aboutImg1} alt="" />
        </div>
      </ScrollFadeIn>
    </>
  );
};

export default About;
