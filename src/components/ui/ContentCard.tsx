import React from "react";

interface ContentCardProps {
  icon: string;
  title: string;
  description: string;
  useShadow?: boolean;
  className?: string; // Añadimos prop para clases adicionales
}

const ContentCard: React.FC<ContentCardProps> = ({
  icon,
  title,
  description,
  useShadow = false,
  className = "",
}) => {
  // Verificar si existe un ícono con ese nombre en public/icons
  const iconPath = `/icons/${icon}.svg`;

  return (
    <div
      className={`p-6 bg-white rounded-xl h-full ${
        useShadow ? "shadow-lg" : "border border-gray-200"
      } flex flex-col items-start transition-all duration-300 hover:translate-y-[-5px] ${className}`}
    >
      {/* Icon */}
      <div className="text-xd-red mb-4">
        {icon && <img src={iconPath} alt={title} className="h-8 w-8" />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-xd-blue mb-2">{title}</h3>

      {/* Description */}
      <p className="text-xd-gray-1">{description}</p>
    </div>
  );
};

export default ContentCard;
