import React from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex items-center pt-24 pb-16 md:h-[100vh] md:py-32 container-xd"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        {/* Left Content - Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-xd-blue leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t("title", { ns: "hero" })}
          </motion.h1>

          <motion.p
            className="text-xd-gray-1 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t("description", { ns: "hero" })}
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button variant="red" size="lg" rounded="full" href="#download">
              {t("button", { ns: "hero" })}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative md:w-[416px] 2xl:w-[616px]">
            <div className="absolute rounded-full bg-gradient-to-r from-xd-blue/10 to-xd-red/10 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/images/heroImg.webp"
              alt="GlucoVa App Screenshot"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
