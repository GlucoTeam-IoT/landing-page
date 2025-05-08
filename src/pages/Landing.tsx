import About from "../components/sections/About";
import ContactUs from "../components/sections/ContactUs";
import DownloadApp from "../components/sections/DownloadApp";
import Hero from "../components/sections/Hero";
import KeyFeatures from "../components/sections/KeyFeatures";
import Team from "../components/sections/Team";
import Footer from "../components/ui/Footer";
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
        <Team />
      </div>
      <div className="bg-gray-50">
        <ContactUs />
      </div>
      <div className="bg-xd-blue">
        <Footer />
      </div>
    </>
  );
};

export default Landing;
