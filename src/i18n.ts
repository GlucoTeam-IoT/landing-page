import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      features: "Features",
      download: "Download",
      team: "Team",
      contact: "Contact",
      login: "Login",
      signup: "Sign Up",
    },
    hero: {
      title: "Take Control of Your Diabetes Journey",
      description:
        "GlucoVa helps you monitor, manage, and improve your diabetes care with smart tracking and personalized insights.",
      button: "Download App",
    },
    about: {
      title: "About GlucoVa",
      subtitle: "Learn more about our mission and values",
      mission: {
        title: "Our Mission",
        description:
          "To empower individuals with diabetes through innovative technology and personalized care solutions.",
      },
      vision: {
        title: "Our Vision",
        description:
          "Creating a world where managing diabetes is seamless, intuitive, and effective for everyone.",
      },
      goals: {
        title: "Our Goals",
        description:
          "Providing accessible tools and education to improve the quality of life for people with diabetes.",
      },
    },
    features: {
      title: "Key Features",
      subtitle:
        "Discover how GlucoVa transforms diabetes management with powerful and user-friendly tools",
      "glucose-tracking": {
        title: "Glucose Tracking",
        description: "Real-time monitoring and historical data analysis",
      },
      "medication-reminder": {
        title: "Medication Reminders",
        description: "Never miss your medication with smart alerts",
      },
      "nutrition-tips": {
        title: "Nutrition Tips",
        description: "Personalized dietary recommendations",
      },
      "daily-monitoring": {
        title: "Daily Monitoring",
        description: "Comprehensive health tracking tools",
      },
    },
    download: {
      title: "Download GlucoVa",
      subtitle: "Get Started Today",
      description:
        "Download GlucoVa and take the first step towards better diabetes management.",
      ios: "Download for iOS",
      android: "Download for Android",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Meet the passionate people behind GlucoVa's innovation",
    },
    contact: {
      title: "Contact Us",
      name: {
        label: "Name",
        placeholder: "Your name",
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
      },
      message: {
        label: "Message",
        placeholder: "Your message",
      },
      button: "Send Message",
      info: {
        title: "Get in Touch",
        email: "contact@glucova.com",
        phone: "+51 902 614 512",
        address: "Av. de la Marina 2810, San Miguel 15087, Lima, Peru",
      },
    },
    footer: {
      description: "Your trusted partner in diabetes care management.",
      navigation: "Navigation",
      account: "Account",
      rights: "All rights reserved.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies",
      },
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Acerca de",
      features: "Características",
      download: "Descargar",
      team: "Equipo",
      contact: "Contacto",
      login: "Iniciar Sesión",
      signup: "Registrarse",
    },
    hero: {
      title: "Toma el Control de tu Viaje con la Diabetes",
      description:
        "GlucoVa te ayuda a monitorear, gestionar y mejorar tu cuidado de la diabetes con seguimiento inteligente e información personalizada.",
      button: "Descargar App",
    },
    about: {
      title: "Acerca de GlucoVa",
      subtitle: "Conoce más sobre nuestra misión y valores",
      mission: {
        title: "Nuestra Misión",
        description:
          "Empoderar a las personas con diabetes a través de tecnología innovadora y soluciones de atención personalizadas.",
      },
      vision: {
        title: "Nuestra Visión",
        description:
          "Crear un mundo donde el manejo de la diabetes sea fluido, intuitivo y efectivo para todos.",
      },
      goals: {
        title: "Nuestros Objetivos",
        description:
          "Proporcionar herramientas accesibles y educación para mejorar la calidad de vida de las personas con diabetes.",
      },
    },
    features: {
      title: "Características Principales",
      subtitle:
        "Descubre cómo GlucoVa transforma el manejo de la diabetes con herramientas potentes y fáciles de usar",
      "glucose-tracking": {
        title: "Seguimiento de Glucosa",
        description:
          "Monitorización en tiempo real y análisis de datos históricos",
      },
      "medication-reminder": {
        title: "Recordatorios de Medicación",
        description: "Nunca olvides tu medicación con alertas inteligentes",
      },
      "nutrition-tips": {
        title: "Consejos Nutricionales",
        description: "Recomendaciones dietéticas personalizadas",
      },
      "daily-monitoring": {
        title: "Monitoreo Diario",
        description: "Herramientas completas de seguimiento de salud",
      },
    },
    download: {
      title: "Descarga GlucoVa",
      subtitle: "Comienza Hoy",
      description:
        "Descarga GlucoVa y da el primer paso hacia un mejor manejo de la diabetes.",
      ios: "Descargar para iOS",
      android: "Descargar para Android",
    },
    team: {
      title: "Conoce a Nuestro Equipo",
      subtitle:
        "Conoce a las personas apasionadas detrás de la innovación de GlucoVa",
    },
    contact: {
      title: "Contáctanos",
      name: {
        label: "Nombre",
        placeholder: "Tu nombre",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "tu.correo@ejemplo.com",
      },
      message: {
        label: "Mensaje",
        placeholder: "Tu mensaje",
      },
      button: "Enviar Mensaje",
      info: {
        title: "Ponte en Contacto",
        email: "contact@glucova.com",
        phone: "+51 902 614 512",
        address: "Av. de la Marina 2810, San Miguel 15087, Lima, Perú",
      },
    },
    footer: {
      description:
        "Tu aliado de confianza en el manejo del cuidado de la diabetes.",
      navigation: "Navegación",
      account: "Cuenta",
      rights: "Todos los derechos reservados.",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    ns: [
      "navbar",
      "hero",
      "about",
      "features",
      "download",
      "team",
      "contact",
      "footer",
    ],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
