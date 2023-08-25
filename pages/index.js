// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text  */}
      <div className="w-full h-full bg-gradient-to-r from-black via-black/10 to-white/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Becoming a <br />
            Future Black Belt
            <br /> Starts <span className="text-accent">Here</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Nixa TaeKwon-Do Academy has been in business for over 20 years. We
            specialize in TaeKwon-Do and Tactical Self-Defense for individuals
            of all ages.
          </motion.p>
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            <span className="text-accent">Chief Instructor and Owner</span>
            <br />
            Bill Taylor, 4th Degree Black Belt
          </motion.p>

          {/* btn  */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mt-10 xl:mb-16"
          >
            1001B Hawks Perch Ave
            <br />
            Nixa, MO 65714
            <br />
            <span className="text-accent">417-860-5220</span>
          </motion.p>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 mix-blend-color-dodge"></div>

        {/* particles */}
        {/* <ParticlesContainer /> */}
        {/* avatar img */}

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[21%]"
        >
          {" "}
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
