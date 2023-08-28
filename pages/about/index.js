import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "patterns",
    info: [
      {
        title:
          "Students learn a new pattern at each belt rank, starting at our beginning pattern, Chon-Ji, and progressing through ranks up to our highest black-belt patterns.",
        icons: [],
      },
    ],
  },
  {
    title: "self-defense",
    info: [
      {
        title:
          "Self-Defense is incorporated into our classes with a set curriculum designed for each belt level. As students progress through the belt ranks, we teach a variety of self-defense, making sure to add to the skill, technique, and difficulty. We also have additional self-defense classes scheduled throughout the year.",
      },
    ],
  },
  {
    title: "tenets",
    info: [
      {
        stage: "Courtesy",
      },
      {
        stage: "Integrity",
      },
      {
        stage: "Perseverance",
      },
      {
        stage: "Self-Control",
      },
      {
        stage: "Indomitable Spirit",
      },
    ],
  },
  {
    title: "student's oath",
    info: [
      {
        stage: "I shall observe the Tenets of TaeKwon-Do.",
      },
      {
        stage: "I shall respect Instructors and Seniors.",
      },
      {
        stage: "I shall never misuse TaeKwon-Do.",
      },
      {
        stage: "I will be a champion of freedom and justice.",
      },
      {
        stage: "I will build a more peaceful world.",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary py-32 text-center xl:text-left text-black">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center xl:mb-40 mt-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            What we are <span className="text-accent">all</span> about.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-left text-black lg:text-justify max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-5 px-2 xl:px-0"
          >
            Our primary patterns are traditional TaeKwon-Do patterns created by
            General Choi Hong Hi, known as the{" "}
            <span className="font-semibold">Chang Hun Kwan</span> style. We also
            teach a set of secondary patterns known as{" "}
            <span className="font-semibold">Choong Sil Kwan</span>.
          </motion.p>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center text-blue-600 lg:text-justify max-w-[500px] mx-auto xl:mx-0 mb-8 px-2 xl:px-0 font-semibold"
          >
            NTA is a member of the American Marital Arts Alliance.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-0"
          >
            <div className="flex flex-1 xl:gap-x-6">AMA ICONS</div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-black/50 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-0 after:h-[2px] after:bg-black/50 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 text-justify mx-3">
                    {item.title}
                  </div>
                  <div className="hidden md:flex"></div>
                  <div className="font-semibold">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-black">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
