import { Link } from "react-router";
import { REGISTER_ENDPOINT } from "../../constants/endpoints";
import FadeIn from "../animations/FadeIn";
const HeroText = () => {
  return (
    <>
      <div className=" h-auto">
        <FadeIn duration={0.4} delay={0.1} from={75}>
          <h2 className="text-white text-[3.5rem] lg:text-[4rem] leading-[1.25] font-bold px-[1rem]">
            Track your progress. <br /> See results.
          </h2>
        </FadeIn>
        <FadeIn duration={0.4} delay={0.2} from={75}>
          <h3 className="px-[1rem] mb-[1rem] text-[1.5rem]">
            Making the best version of yourself has never been easier.
          </h3>
        </FadeIn>
        <FadeIn duration={0.4} delay={0.3} from={75}>
          <div className="flex justify-start pl-[1rem] mb-[1rem] md:mb-0">
            <Link
              to={REGISTER_ENDPOINT}
              className=" flex items-center group bg-primary py-1 px-2 border-2 border-primary rounded-full  text-background text-[1.3rem] font-semibold hover:cursor-pointer active:bg-background active:text-primary transition-all duration-200"
            >
              <div>Get Started</div>
              <svg
                className="mt-[2px] h-[1.7rem] w-[1.7rem] fill-background group-hover:ml-[1rem] group-active:ml-[1rem] transition-all duration-150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default HeroText;
