import React from "react";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <section className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
        <motion.section
          className="flex items-center gap-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <IoMdHeartEmpty className="text-pink-600 text-2xl" />
          <span className="text-2xl font-bold text-black">Queersource</span>
        </motion.section>

        <motion.section
          className="flex flex-wrap justify-center gap-4 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <a
            href="#services"
            className="hover:text-pink-600 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Services
          </a>
          <a
            href="#resources"
            className="hover:text-pink-600 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Resources
          </a>
          <a
            href="#get-involved"
            className="hover:text-pink-600 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Get Involved
          </a>
          <a
            href="#community"
            className="hover:text-pink-600 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Community
          </a>
        </motion.section>

        <motion.section className="flex gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
          <button
            className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Log In
          </button>
          <button
            className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-md text-sm hover:bg-pink-700 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Get Help Now
          </button>
        </motion.section>
      </section>
    </nav>
  );
};

export default Navbar;