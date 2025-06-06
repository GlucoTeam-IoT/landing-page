import React from "react";
import { navbarConfig } from "../../utils/consts/navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const { t } = useTranslation(["footer", "navbar"]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Handle regular navigation for non-anchor links
      window.location.href = href;
    }
  };

  // Separar los elementos del navbar en grupos para las columnas
  const mainNavItems = navbarConfig.navItems.filter(
    (item) => !item.isButton && !["login", "signup"].includes(item.id)
  );

  const accountItems = navbarConfig.navItems.filter((item) =>
    ["login", "signup"].includes(item.id)
  );

  return (
    <footer className="container-xd text-white py-16" ref={ref}>
      <div className="container-xd">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/icons/glucovaWhite.png"
                alt="GlucoVa Logo"
                className="h-16 w-auto"
              />
            </motion.div>
            <motion.p
              className="text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("description", { ns: "footer" })}
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://facebook.com"
                className="hover:text-xd-red transition-colors"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-xd-red transition-colors"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-xd-red transition-colors"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-xd-red transition-colors"
              >
                <FaLinkedinIn size={30} />
              </a>
            </motion.div>
          </div>

          {/* Enlaces principales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">
              {t("navigation", { ns: "footer" })}
            </h3>
            <ul className="space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(item.id, { ns: "navbar" })}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cuenta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-4">
              {t("account", { ns: "footer" })}
            </h3>
            <ul className="space-y-2">
              {accountItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(item.id, { ns: "navbar" })}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Separador */}
        <motion.div
          className="border-t border-gray-300 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} GlucoVa.{" "}
            {t("rights", { ns: "footer" })}
          </p>

          <div className="mt-4 sm:mt-0 text-sm text-gray-300">
            <a href="#privacy" className="hover:text-white mr-4">
              {t("links.privacy", { ns: "footer" })}
            </a>
            <a href="#terms" className="hover:text-white mr-4">
              {t("links.terms", { ns: "footer" })}
            </a>
            <a href="#cookies" className="hover:text-white">
              {t("links.cookies", { ns: "footer" })}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
