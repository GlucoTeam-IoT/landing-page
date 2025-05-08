import About from "../components/sections/About";
import DownloadApp from "../components/sections/DownloadApp";
import Hero from "../components/sections/Hero";
import KeyFeatures from "../components/sections/KeyFeatures";
import Navbar from "../components/ui/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="container-xd">
        <Hero />
        <About />
        <KeyFeatures />
        <DownloadApp />
      </div>
    </>
  );
};

export default Landing;
