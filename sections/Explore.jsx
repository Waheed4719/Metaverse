"use client";

import { useState, useContext } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { DisplayModeContext } from "../contexts/DisplayModeContext";
import { exploreWorlds, exploreWorldsDay } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  const { isDarkMode } = useContext(DisplayModeContext);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {console.log(isDarkMode, isDarkMode ? 1 : 2)}
          {(isDarkMode ? exploreWorlds : exploreWorldsDay).map(
            (world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
