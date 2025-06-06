import React from "react";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const DownloadApp: React.FC = () => {
  const { t } = useTranslation("download");

  return (
    <section id="download" className="py-20 container-xd">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold lg:block hidden text-xd-blue">
          {t("title")}
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <div className="relative md:w-[416px] xl:w-[592px]">
            <div className="absolute rounded-full bg-gradient-to-r from-xd-blue/10 to-xd-red/10 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/images/downloadImg.png"
              alt="GlucoVa App on devices"
              className="w-full h-auto rounded-3xl shadow-lg z-10 relative"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-xd-blue text-center leading-tight">
            {t("subtitle")}
          </h3>

          <p className="text-xd-gray-1 text-lg text-center">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
