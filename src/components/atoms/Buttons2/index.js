import React from "react";

const Button = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`p-2 px-4 font-bold rounded ${
        isActive ? "bg-yellow-400" : "bg-blue-400"
      } text-white`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
