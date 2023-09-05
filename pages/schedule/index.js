// components
import ScheduleSlider from "../../components/ScheduleSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Schedule = () => {
  return (
    <div className="h-full bg-primary py-36 flex items-center text-black">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-0 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Weekly class <span className="text-accent">Schedule</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-black lg:text-justify"
            >
              There will be no regularly scheduled classes on Thursday and
              Friday of Testing weeks.
              <br />
              <span className="font-semibold">Belt Promotion</span> will be held
              in place of the regularly scheduled class on Thursday of the week
              following Testing week.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-black lg:text-justify font-semibold"
            >
              If Nixa Schools are closed due to bad weather, we will also be
              closed.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] xl:mt-12"
          >
            <ScheduleSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
