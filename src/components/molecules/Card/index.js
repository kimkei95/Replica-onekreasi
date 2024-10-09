import Box from "@/components/atoms/Box";
import React from "react";

const Card = ({ title, description, className }) => {
  return (
    <Box className={`${className} cursor-pointer transition duration-300`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Box>
  );
};

export default Card;
