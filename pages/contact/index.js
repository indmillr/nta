import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kbavyqc', 'template_oib19lw', form.current, 'iC7Fva3covAMd6Kef')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="h-full bg-primary text-black">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-black text-center max-w-sm xl:max-w-xl mx-auto mb-5 xl:mb-16"
          >
            <span className="text-blue-600 font-semibold">
              Nixa TaeKwon-Do Academy
            </span>
            <br /><a href="https://www.google.com/maps/place/1001+Hawk's+Perch,+Nixa,+MO+65714/" target="_blank">
            1001B Hawks Perch Ave
            <br />
            Nixa, MO 65714</a>
            <br />
            <span className="text-accent font-semibold"><a href="tel:417-860-5220">(417) 860-5220</a></span>
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6"
          >
            Want to <span className="text-accent">know</span> more?
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" name="user_name" />
              <input type="text" placeholder="email" className="input" name="user_email" />
            </div>
            <textarea placeholder="message" className="textarea" name="user_message"></textarea>
            <button type="submit" className="btn rounded-full border border-black max-w-[170px] px-8 transition-all duration-300 hover:bg-blue-600 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] text-white opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
