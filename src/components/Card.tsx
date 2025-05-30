import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  symbol: React.ReactNode;
  title: string;
  description: string;
  button: string;
}

const Card: React.FC<CardProps> = ({ symbol, title, description, button }) => {
  return (
    <motion.section
      className="bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-200 hover:shadow-2xl flex flex-col items-center gap-4 min-h-[320px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}
    >
      <section className="flex flex-col items-center gap-2 mb-2">
        <span className="text-pink-600 text-4xl flex items-center">
          {symbol}
        </span>
        <h3 className="text-2xl font-extrabold leading-none text-gray-900">
          {title}
        </h3>
      </section>
      <p className="mb-4 text-gray-700 text-base text-center">
        {description}
      </p>
      <button className="bg-pink-50 text-pink-700 font-semibold px-5 py-2 rounded-full hover:bg-pink-100 hover:text-pink-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 cursor-pointer mt-auto">
        {button}
      </button>
    </motion.section>
  );
};

export default Card;