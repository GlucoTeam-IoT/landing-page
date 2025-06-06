import React, { useState, useEffect, useRef } from "react";
import { navbarConfig } from "../../utils/consts/navbar";
import Button from "./Button";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close mobile menu immediately
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        console.warn(`Section with selector "${href}" not found.`);
      }
    } else {
      setTimeout(() => {
        window.location.href = href;
      }, 100);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white py-2 lg:bg-opacity-95 lg:shadow-sm"
      }`}
    >
      <div className="container-xd flex items-center justify-between">
        {/* Logo */}
        <a href={navbarConfig.logo.href} className="flex items-center">
          <img
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navbarConfig.navItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.isButton ? (
                <Button
                  variant="red"
                  href={item.href}
                  onClick={(e) =>
                    scrollToSection(
                      e as React.MouseEvent<HTMLAnchorElement>,
                      item.href
                    )
                  }
                >
                  {t(item.id, { ns: "navbar" })}
                </Button>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="hover:text-gray-800 text-xd-blue transition-colors"
                >
                  {t(item.id, { ns: "navbar" })}
                </a>
              )}
            </React.Fragment>
          ))}

          {/* Language switcher */}
          <div className="flex items-center space-x-3 ml-4">
            <button
              onClick={() => changeLanguage("es")}
              className={`font-medium ${
                i18n.language === "es"
                  ? "text-xd-red border-b-2 border-xd-red"
                  : "text-gray-600 hover:text-xd-red"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`font-medium ${
                i18n.language === "en"
                  ? "text-xd-red border-b-2 border-xd-red"
                  : "text-gray-600 hover:text-xd-red"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile menu button using hamburger-react */}
        <div className="lg:hidden flex items-center">
          {/* Language switcher for mobile */}
          <div className="flex items-center space-x-5 mr-4">
            <button
              onClick={() => changeLanguage("es")}
              className={`font-medium ${
                i18n.language === "es"
                  ? "text-xd-red border-b-2 border-xd-red"
                  : "text-gray-600 hover:text-xd-red"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`font-medium ${
                i18n.language === "en"
                  ? "text-xd-red border-b-2 border-xd-red"
                  : "text-gray-600 hover:text-xd-red"
              }`}
            >
              EN
            </button>
          </div>

          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={20}
            direction="right"
            color="#004080"
            duration={0.3}
          />
        </div>
      </div>

      {/* Mobile Menu animation using Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white "
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-xd py-6">
              <motion.div
                className="flex flex-col items-center space-y-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {navbarConfig.navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="w-full text-center"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block py-2 text-lg font-medium ${
                        item.isButton ? "text-xd-red" : "text-xd-blue"
                      } hover:opacity-80 transition-opacity`}
                    >
                      {t(item.id, { ns: "navbar" })}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
