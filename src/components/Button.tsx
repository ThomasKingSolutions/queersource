import React from "react";

interface ButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, primary = false, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 active:scale-95 shadow-md ${
        primary
          ? 'bg-pink-600 text-white font-semibold hover:bg-pink-700'
          : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
      } px-6 py-3 rounded-full cursor-pointer transition-all duration-200 ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;