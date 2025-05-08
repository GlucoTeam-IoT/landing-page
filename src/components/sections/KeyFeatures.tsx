import React from "react";
import ContentCard from "../ui/ContentCard";
import { featuresConfig } from "../../utils/consts/features";

const KeyFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container-xd">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
            {featuresConfig.title}
          </h2>
          <p className="text-xd-gray-1 max-w-2xl mx-auto">
            {featuresConfig.subtitle}
          </p>
        </div>

        {/* Features Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresConfig.features.map((feature) => (
            <ContentCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              useShadow={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
