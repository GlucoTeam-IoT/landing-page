import React from "react";
import { navbarConfig } from "../../utils/consts/navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
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
    <footer className="container-xd text-white py-16">
      <div className="container-xd">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <img
                src="/icons/glucovaWhite.png"
                alt="GlucoVa Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in diabetes care management.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
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
            </div>
          </div>

          {/* Enlaces principales */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuenta */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              {accountItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} GlucoVa. All rights reserved.
          </p>

          <div className="mt-4 sm:mt-0 text-sm text-gray-300">
            <a href="#privacy" className="hover:text-white mr-4">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white mr-4">
              Terms
            </a>
            <a href="#cookies" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
