"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { DisplayModeContext } from "../contexts/DisplayModeContext";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DisplayModeContext);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div
        className={`${
          isDarkMode ? "gradient-01-dark" : "gradient-01"
        }absolute w-[50%] inset-0 `}
      />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <div className="flex items-center gap-6 ">
          <img
            src={isDarkMode ? "/sun.svg" : "/moon.svg"}
            onClick={toggleDarkMode}
            alt="menu"
            className="w-[24px] h-[24px] object-contain text-white cursor-pointer"
          />
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
