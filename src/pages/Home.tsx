import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Nav from "../components/navbar/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="text-text">
        <div className="place-items-center mx-auto max-w-[1150px]">
          <Hero />
        </div>
        <div className="mx-auto max-w-[750px]">
          <About />
        </div>
        <div className="place-items-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
