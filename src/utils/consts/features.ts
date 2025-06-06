export interface FeatureItem {
  id: string;
  icon: string;
}

export interface FeaturesConfig {
  features: FeatureItem[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      id: "glucose-tracking",
      icon: "tracking",
    },
    {
      id: "medication-reminder",
      icon: "reminder",
    },
    {
      id: "nutrition-tips",
      icon: "nutrition",
    },
    {
      id: "daily-monitoring",
      icon: "daily",
    },
  ],
};
