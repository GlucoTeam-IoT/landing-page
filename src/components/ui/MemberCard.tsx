import React from "react";

interface MemberCardProps {
  image: string;
  name: string;
  position: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Imagen circular */}
      <div className="w-36 h-36 lg:w-40 lg:h-40 mb-4 overflow-hidden rounded-full">
        <img
          src={`/images/members/${image}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-xl font-bold text-xd-blue text-center mb-1">
        {name}
      </h3>

      {/* Cargo */}
      <p className="text-sm font-medium text-xd-red">{position}</p>
    </div>
  );
};

export default MemberCard;
