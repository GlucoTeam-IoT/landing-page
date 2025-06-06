import React from "react";
import ContentCard from "../ui/ContentCard";
import { aboutConfig } from "../../utils/consts/about";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="about" className="py-20 container-xd" ref={ref}>
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aboutConfig.cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <ContentCard
              icon={card.icon}
              title={t(`${card.id}.title`)}
              description={t(`${card.id}.description`)}
              useShadow={true}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
