import React from "react";
import MemberCard from "../ui/MemberCard";
import { teamConfig } from "../../utils/consts/members";
import { useTranslation } from "react-i18next";

const Team: React.FC = () => {
  const { t } = useTranslation("team");

  return (
    <section id="team" className="py-20 container-xd">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-xd-blue mb-4">
          {t("title")}
        </h2>
        <p className="text-xd-gray-1 max-w-2xl mx-auto">{t("subtitle")}</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {teamConfig.members.map((member) => (
          <MemberCard
            key={member.id}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
