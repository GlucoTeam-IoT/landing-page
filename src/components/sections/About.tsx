import React from "react";
import ContentCard from "../ui/ContentCard";
import { aboutConfig } from "../../utils/consts/about";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <section id="about" className="py-20 container-xd">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
          {t("title")}
        </h2>
        <p className="text-xd-gray-1 max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aboutConfig.cards.map((card) => (
          <ContentCard
            key={card.id}
            icon={card.icon}
            title={t(`${card.id}.title`)}
            description={t(`${card.id}.description`)}
            useShadow={true}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
