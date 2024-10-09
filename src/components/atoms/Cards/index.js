// Atoms/Card.js
import Image from "next/image";
import React from "react";
import Button from "../Buttons";

const Card = ({ imageSrc, altText, title, websiteLink }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <Image
        src={imageSrc}
        width={400}
        height={600}
        alt={altText}
        className="w-full h-32 object-cover mb-2"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Button>
        <a href={websiteLink} className="text-black">
          Visit Site
        </a>
      </Button>
    </div>
  );
};

export default Card;
