import React from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center pt-24 pb-16 md:h-[100vh] md:py-32"
    >
      <div className="container-xd flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        {/* Left Content - Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-xd-blue leading-tight">
            Take Control of Your Diabetes Journey
          </h1>

          <p className="text-xd-gray-1 text-lg">
            GlucoVa helps you monitor, manage, and improve your diabetes care
            with smart tracking and personalized insights.
          </p>

          <div className="pt-4">
            <Button variant="red" size="lg" rounded="full" href="#download">
              Descargar App
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative md:w-[416px] xl:w-[616px]">
            <div className="absolute rounded-full bg-gradient-to-r from-xd-blue/10 to-xd-red/10 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/images/heroImg.png"
              alt="GlucoVa App Screenshot"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
