import React from "react";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const DownloadApp: React.FC = () => {
  const { t } = useTranslation("download");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="download" className="py-20 container-xd" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold lg:block hidden text-xd-blue">
          {t("title")}
        </h2>
      </motion.div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative md:w-[416px] xl:w-[592px]">
            <div className="absolute rounded-full bg-gradient-to-r from-xd-blue/10 to-xd-red/10 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/images/downloadImg.png"
              alt="GlucoVa App on devices"
              className="w-full h-auto rounded-3xl shadow-lg z-10 relative"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 space-y-6 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-xd-blue text-center leading-tight">
            {t("subtitle")}
          </h3>

          <p className="text-xd-gray-1 text-lg text-center">
            {t("description")}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* iOS Download Button */}
            <a
              href="#ios-download"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all"
            >
              <FaApple className="h-6 w-6 mr-2" />
              {t("ios")}
            </a>

            {/* Android Download Button */}
            <a
              href="#android-download"
              className="inline-flex items-center justify-center bg-xd-red text-white px-6 py-3 rounded-2xl hover:bg-opacity-90 transition-all"
            >
              <BiLogoPlayStore className="h-6 w-6 mr-2" />
              {t("android")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadApp;
