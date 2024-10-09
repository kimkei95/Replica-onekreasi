import React from "react";

const Box = ({ children, className }) => {
  return (
    <div className={`${className} bg-white rounded-lg shadow-md p-4 relative`}>
      {children}
    </div>
  );
};

export default Box;
