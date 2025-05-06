import React from "react";


const colorMap={
  blue:'bg-blue-500 hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
}

const CustomButton = ({ children, onClick ,type,btnColor }) => {
  return (
    <div>
      <button
        className={`${colorMap[btnColor]} text-white font-medium px-4 py-2 rounded-lg hover:cursor-pointer transition duration-300`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
