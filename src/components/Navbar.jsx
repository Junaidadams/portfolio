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
    <nav className="dark:bg-mainBlack sticky top-0 z-20 flex max-h-[30px] max-w-screen justify-between bg-white md:max-h-10">
      {/* Navigation Links */}

      <ul className="mx-auto hidden flex-row space-x-8 rounded-full p-2 capitalize md:flex">
        {navigationLinks.map((link) => (
          <li key={link.key} className="">
            <a
              href={link.link}
              className="font-panchang mb-2 rounded-full px-3 py-2 font-light dark:text-white dark:hover:text-gray-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle Button */}

      <div className="md:hidden">
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
            className="bg-mainWhite dark:bg-mainBlack bg-opacity-95 border-b-mainWhite absolute top-0 left-0 z-30 flex w-full flex-col space-y-6 border pb-10 capitalize shadow-lg md:hidden"
          >
            <div className="md:hidden">
              <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {navigationLinks.map((link) => (
              <a
                key={link.key}
                href={link.link}
                className="text-mainBlack dark:text-mainWhite font-panchang m-auto font-light tracking-tighter"
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
