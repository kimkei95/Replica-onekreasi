// Atoms/ImageComponent.js
import React from "react";
import Image from "next/image";

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded shadow-md"
    />
  );
};

export default ImageComponent;
