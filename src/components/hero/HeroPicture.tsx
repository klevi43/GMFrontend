import heroImg from "../../assets/pictures/pexels-marcuschanmedia-18060023.jpg";
import FadeIn from "../animations/FadeIn";
const HeroPicture = () => {
  return (
    <div className="my-auto">
      <FadeIn delay={0.4} duration={0.4} from={75}>
        <div>
          <img className="w-fit px-[1rem]" src={heroImg} alt="" />
        </div>
      </FadeIn>
    </div>
  );
};

export default HeroPicture;
