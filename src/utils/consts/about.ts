export interface ContentCardItem {
  id: string;
  icon: string;
}

export interface AboutConfig {
  cards: ContentCardItem[];
}

export const aboutConfig: AboutConfig = {
  cards: [
    {
      id: "mission",
      icon: "mission",
    },
    {
      id: "vision",
      icon: "vision",
    },
    {
      id: "goals",
      icon: "goals",
    },
  ],
};
