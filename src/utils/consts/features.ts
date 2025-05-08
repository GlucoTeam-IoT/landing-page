export interface FeatureItem {
    id: string;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface FeaturesConfig {
    title: string;
    subtitle: string;
    features: FeatureItem[];
  }
  
  export const featuresConfig: FeaturesConfig = {
    title: "Key Features",
    subtitle: "Discover how GlucoVa transforms diabetes management with powerful and user-friendly tools",
    features: [
      {
        id: "glucose-tracking",
        icon: "tracking",
        title: "Glucose Tracking",
        description: "Real-time monitoring and historical data analysis"
      },
      {
        id: "medication-reminder",
        icon: "reminder",
        title: "Medication Reminders",
        description: "Never miss your medication with smart alerts"
      },
      {
        id: "nutrition-tips",
        icon: "nutrition",
        title: "Nutrition Tips",
        description: "Personalized dietary recommendations"
      },
      {
        id: "daily-monitoring",
        icon: "daily",
        title: "Daily Monitoring",
        description: "Comprehensive health tracking tools"
      }
    ]
  };