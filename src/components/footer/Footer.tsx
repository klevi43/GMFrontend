import Logo from "../../assets/pictures/GM-Logo.png";
const Footer = () => {
  return (
    <>
      {/* <ScrollFadeIn> */}
      <div className="flex justify-center mt-16 pb-6">
        <img src={Logo} className="h-[4rem]" alt="" />
      </div>
      {/* </ScrollFadeIn> */}
    </>
  );
};

export default Footer;
