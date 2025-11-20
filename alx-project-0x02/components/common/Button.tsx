jimport React from "react";
import { ButtonProps } from "@/interfaces";
["import { type ButtonProps }"]


const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shapeClass} transition duration-200 hover:bg-blue-700`}
    >
      {label}
    </button>
  );
};

export default Button;
