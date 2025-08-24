// Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../constants";
import Toggle from "./Toggle";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="z-20 flex justify-between bg-white dark:bg-mainBlack max-w-screen sticky top-0 max-h-10">
      {/* Navigation Links */}

      <ul className="space-x-8 capitalize hidden md:flex flex-row p-2 mx-auto  rounded-full">
        {navigationLinks.map((link) => (
          <li key={link.key} className="">
            <a
              href={link.link}
              className=" py-2 px-3 rounded-full dark:text-white mb-2 dark:hover:text-gray-300 font-panchang font-light"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle Button */}

      <div className="md:hidden ">
        <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full shadow-lg flex flex-col space-y-6 pb-10 capitalize md:hidden z-30 bg-mainWhite dark:bg-mainBlack bg-opacity-95 border-b-mainWhite border"
          >
            <div className="md:hidden ">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {navigationLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-mainBlack dark:text-mainWhite font-panchang tracking-tighter m-auto font-light "
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
