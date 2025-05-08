export interface ContentCardItem {
    id: string;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface AboutConfig {
    title: string;
    subtitle?: string;
    cards: ContentCardItem[];
  }
  
  export const aboutConfig: AboutConfig = {
    title: "About GlucoVa",
    cards: [
      {
        id: "mission",
        icon: "mission",
        title: "Our Mission",
        description: "To empower individuals with diabetes through innovative technology and personalized care solutions."
      },
      {
        id: "vision",
        icon: "vision",
        title: "Our Vision",
        description: "Creating a world where managing diabetes is seamless, intuitive, and effective for everyone."
      },
      {
        id: "goals",
        icon: "goals",
        title: "Our Goals",
        description: "Providing accessible tools and education to improve the quality of life for people with diabetes."
      }
    ]
  };