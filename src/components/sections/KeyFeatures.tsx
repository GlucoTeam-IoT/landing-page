import React from "react";
import ContentCard from "../ui/ContentCard";
import { featuresConfig } from "../../utils/consts/features";
import { useTranslation } from "react-i18next";

const KeyFeatures: React.FC = () => {
  const { t } = useTranslation("features");

  return (
    <section id="features" className="py-20 container-xd">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
          {t("title")}
        </h2>
        <p className="text-xd-gray-1 max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresConfig.features.map((feature) => (
          <ContentCard
            key={feature.id}
            icon={feature.icon}
            title={t(`${feature.id}.title`)}
            description={t(`${feature.id}.description`)}
            useShadow={false}
          />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
