export interface NavItem {
  id: string;
  href: string;
  isButton?: boolean;
}

export interface NavbarConfig {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  navItems: NavItem[];
}

export const navbarConfig: NavbarConfig = {
  logo: {
    src: "/icons/glucova.png",
    alt: "Company Logo",
    href: "/",
  },
  navItems: [
    {
      id: "home",
      href: "#home",
    },
    {
      id: "about",
      href: "#about",
    },
    {
      id: "features",
      href: "#features",
    },
    {
      id: "download",
      href: "#download",
    },
    {
      id: "team",
      href: "#team",
    },
    {
      id: "contact",
      href: "#contact",
    },
    {
      id: "login",
      href: "https://glucovaapp.netlify.app/",
    },
    {
      id: "signup",
      href: "https://glucovaapp.netlify.app/",
      isButton: true,
    },
  ],
};
