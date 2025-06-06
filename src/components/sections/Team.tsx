import React from "react";
import MemberCard from "../ui/MemberCard";
import { teamConfig } from "../../utils/consts/members";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

const Team: React.FC = () => {
  const { t } = useTranslation("team");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="team" className="py-20 container-xd" ref={ref}>
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

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {teamConfig.members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <MemberCard
              image={member.image}
              name={member.name}
              position={member.position}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
