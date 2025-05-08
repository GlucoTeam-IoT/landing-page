import React, { useState, useEffect } from "react";
import { navbarConfig } from "../../utils/consts/navbar";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    } else {
      // Handle regular navigation for non-anchor links
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white bg-opacity-95 py-2 shadow-sm"
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
        <div className="hidden md:flex items-center space-x-6">
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
                  {item.label}
                </Button>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="hover:text-gray-800 text-xd-blue transition-colors"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-xd py-4">
            <div className="flex flex-col space-y-4">
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
                      fullWidth
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-gray-800 hover:text-xd-blue"
                    >
                      {item.label}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
