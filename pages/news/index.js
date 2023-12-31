// components
import NewsSlider from "../../components/NewsSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const News = () => {
  return (
    <div className="h-full bg-primary text-black py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              NTA <span className="text-accent">News</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-black"
            >
              For now, no news is good news.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <NewsSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News;
