import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frontendTechnologies, backendTechnologies } from "../../constants";

const TechStack = () => {
  const [activeFrontendIndex, setActiveFrontendIntex] = useState(0);
  const [activeBackendIndex, setActiveBackendIntex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const containerVariants = {
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.2,
      },
    },
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex w-full">
      <div className=" px-4 md:px-8">
        <h1 className="font font-panchang text-left dark:text-mainWhite ">
          What I use
        </h1>
        <button
          className="font-semibold font-panchang text-left dark:text-mainWhite "
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </button>
        <AnimatePresence>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"
          >
            {activeCategory === "frontend" &&
              frontendTechnologies.map(
                ({ key, name, shortDesc, img: Image, link }) => (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    onClick={() => setActiveFrontendIntex(key)}
                    key={key}
                    className={`border border-mainBlack dark:border-mainWhite p-1 md:p-3 text-mainBlack dark:text-mainWhite flex flex-col ${
                      activeFrontendIndex === key
                        ? "bg-mainBlack text-mainWhite dark:bg-mainWhite dark:text-mainBlack transition-all duration-400"
                        : ""
                    }`}
                  >
                    <div className="flex">
                      <Image className="w-5 h-6 " />
                      <h3 className="font-panchang tracking-tight text-xs">
                        {name}
                      </h3>
                    </div>
                    {activeFrontendIndex === key && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {shortDesc}
                      </p>
                    )}
                  </motion.div>
                )
              )}
          </motion.div>
        </AnimatePresence>
        <button
          className="font-semibold font-panchang text-left dark:text-mainWhite "
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </button>
        <AnimatePresence>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-1"
          >
            {activeCategory === "backend" &&
              backendTechnologies.map(
                ({ key, name, shortDesc, img: Image, link }) => (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    onClick={() => setActiveFrontendIntex(key)}
                    key={key}
                    className=" border border-mainBlack dark:border-mainWhite p-1 md:p-3 text-mainBlack dark:text-mainWhite flex flex-col"
                  >
                    <Image className="w-5 h-6 " />
                    <h3 className="font-panchang tracking-tight text-xs">
                      {name}
                    </h3>
                  </motion.div>
                )
              )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechStack;
