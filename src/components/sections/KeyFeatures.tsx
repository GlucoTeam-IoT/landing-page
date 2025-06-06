import React from "react";
import ContentCard from "../ui/ContentCard";
import { featuresConfig } from "../../utils/consts/features";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const KeyFeatures: React.FC = () => {
  const { t } = useTranslation("features");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 container-xd" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
          {t("title")}
        </h2>
        <p className="text-xd-gray-1 max-w-2xl mx-auto">{t("subtitle")}</p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {featuresConfig.features.map((feature) => (
          <motion.div key={feature.id} variants={item} className="h-full">
            <ContentCard
              icon={feature.icon}
              title={t(`${feature.id}.title`)}
              description={t(`${feature.id}.description`)}
              useShadow={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KeyFeatures;
