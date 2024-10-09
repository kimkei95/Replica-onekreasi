import Card from "@/components/molecules/Card";
import React from "react";

const CardGroup = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 text-gray-900"
        />
      ))}
    </div>
  );
};

export default CardGroup;
