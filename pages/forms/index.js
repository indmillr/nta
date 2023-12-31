// components
import FormsSlider from "../../components/FormsSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Forms = () => {
  return (
    <div className="h-full bg-primary py-32 text-center text-black">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-5 xl:mb-0"
        >
          Form <span className="text-accent">meanings.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <FormsSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Forms;
