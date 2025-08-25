import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frontendTechnologies, backendTechnologies } from "../../constants";
import { Tooltip } from "react-tooltip";

const TechStack = () => {
  const [activeFrontendIndex, setActiveFrontendIntex] = useState(null);
  const [activeBackendIndex, setActiveBackendIntex] = useState(null);
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
        delay: 0.3, // match container animation duration
        duration: 0.2,
      },
    },
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col px-4 md:px-8">
        <h1 className="font font-panchang dark:text-mainWhite text-left"></h1>

        {/* Frontend Button */}
        <button
          className={`font-panchang mb-1 px-2 py-1 text-left font-semibold hover:cursor-pointer ${
            activeCategory === "frontend"
              ? "bg-mainBlack text-mainWhite dark:bg-mainWhite dark:text-mainBlack"
              : "text-mainBlack dark:text-mainWhite"
          }`}
          onClick={() =>
            setActiveCategory(activeCategory === "frontend" ? "" : "frontend")
          }
        >
          Frontend {activeCategory === "frontend" ? "▲" : "▼"}
        </button>

        {/* Frontend Technologies */}
        <AnimatePresence mode="wait">
          {activeCategory === "frontend" && (
            <motion.div
              key="frontend"
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3"
            >
              {frontendTechnologies.map(
                ({ key, name, shortDesc, img: Image }) => (
                  <motion.div
                    data-tooltip-anchor={`frontend-${key}`}
                    key={key}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    onClick={() =>
                      setActiveFrontendIntex((prev) =>
                        prev === key ? null : key,
                      )
                    }
                    className={`border-mainBlack dark:border-mainWhite flex cursor-pointer flex-col border p-1 transition duration-500 md:p-3 ${
                      activeFrontendIndex === key
                        ? "bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack"
                        : "text-mainBlack dark:text-mainWhite"
                    }`}
                  >
                    <div className="flex flex-col">
                      <Image className="h-6 w-5" />
                      <h3 className="font-panchang text-xs tracking-tight">
                        {name}
                      </h3>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backend Button */}
        <button
          className={`font-panchang mb-1 px-2 py-1 text-left font-semibold hover:cursor-pointer ${
            activeCategory === "backend"
              ? "bg-mainBlack text-mainWhite dark:bg-mainWhite dark:text-mainBlack"
              : "text-mainBlack dark:text-mainWhite"
          }`}
          onClick={() =>
            setActiveCategory(activeCategory === "backend" ? "" : "backend")
          }
        >
          Backend {activeCategory === "backend" ? "▲" : "▼"}
        </button>

        {/* Backend Technologies */}
        <AnimatePresence mode="wait">
          {activeCategory === "backend" && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3"
            >
              {backendTechnologies.map(
                ({ key, name, shortDesc, img: Image }) => (
                  <motion.div
                    data-tooltip-anchor={`backend-${key}`}
                    key={key}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    onClick={() =>
                      setActiveBackendIntex((prev) =>
                        prev === key ? null : key,
                      )
                    }
                    className={`border-mainBlack dark:border-mainWhite flex cursor-pointer flex-col border p-1 md:p-3 ${
                      activeBackendIndex === key
                        ? "bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack"
                        : "text-mainBlack dark:text-mainWhite"
                    }`}
                  >
                    <div className="flex flex-col">
                      <Image className="h-6 w-5" />
                      <h3 className="font-panchang text-xs tracking-tight">
                        {name}
                      </h3>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Frontend Tooltip */}
      {activeFrontendIndex !== null && (
        <Tooltip
          anchorSelect={`[data-tooltip-anchor='frontend-${activeFrontendIndex}']`}
          content={
            frontendTechnologies.find((t) => t.key === activeFrontendIndex)
              ?.shortDesc || ""
          }
          place="top"
          openOnClick={false}
          isOpen={true}
          style={{ width: "250px", fontSize: "0.8rem" }}
        />
      )}

      {/* Backend Tooltip */}
      {activeBackendIndex !== null && (
        <Tooltip
          anchorSelect={`[data-tooltip-anchor='backend-${activeBackendIndex}']`}
          content={
            backendTechnologies.find((t) => t.key === activeBackendIndex)
              ?.shortDesc || ""
          }
          place="top"
          openOnClick={false}
          isOpen={true}
          style={{ width: "250px", fontSize: "0.8rem" }}
        />
      )}
    </div>
  );
};

export default TechStack;
