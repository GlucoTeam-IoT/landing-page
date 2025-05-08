export interface NavItem {
    id: string;
    label: string;
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
      href: "/"
    },
    navItems: [
      {
        id: "home",
        label: "Home",
        href: "#home"
      },
      {
        id: "about",
        label: "About",
        href: "#about"
      },
      {
        id: "features",
        label: "Features",
        href: "#features"
      },
      {
        id: "download",
        label: "Download",
        href: "#download"
      },
      {
        id: "team",
        label: "Team",
        href: "#team"
      },
      {
        id: "contact",
        label: "Contact",
        href: "#contact"
      },
      {
        id: "login",
        label: "Login",
        href: "/login"
      },
      {
        id: "signup",
        label: "Sign Up",
        href: "/signup",
        isButton: true
      }
    ]
  };