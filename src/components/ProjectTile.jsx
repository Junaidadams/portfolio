import { projects } from "../../constants";
import { useState } from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronCompactUp } from "react-icons/bs";

export const ProjectTile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isProjectOrLink = ({ project }) => {
    if (project.github || project.link) {
      return true;
    } else {
      return false;
    }
  };

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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex w-full">
      <div className="px-4 md:px-8">
        {projects.map((project, index) => (
          <div key={project.key} className="mx mb-3 md:mb-4 2xl:mb-5">
            <button
              onClick={() => toggleAccordion(index)}
              className="font font-panchang dark:text-mainWhite text-left text-sm hover:cursor-pointer sm:text-base"
            >
              {project.name}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={containerVariants}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={contentVariants}
                    className="flex flex-col space-y-1 text-gray-700 lg:flex-row lg:space-x-9 dark:text-gray-300"
                  >
                    <div className="font-chillax sm:max-w-[420px] lg:my-auto lg:h-fit">
                      <p className="mb-2 lg:hidden">{project.shortDesc}</p>
                      <p className="hidden lg:block">{project.longDesc}</p>
                      <div className="mb-2 flex flex-row">
                        <div className="lg:hidden">
                          {project.tags.map(({ key, name, icon: Icon }) => (
                            <span
                              key={key}
                              className="dark:border-mainWhite dark:text-mainWhite mr-1 border border-black px-2 py-1 text-xs sm:mr-2"
                            >
                              {name} <Icon className="ml-[1px] inline-block" />
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-1 sm:space-x-2 lg:hidden">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              className="dark:border-mainWhite dark:text-mainWhite border border-black px-2 py-1 text-xs"
                            >
                              <FaGithub />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              className="dark:border-mainWhite dark:text-mainWhite border border-black px-2 py-1 text-xs"
                            >
                              <FaExternalLinkAlt strokeWidth={1} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col space-y-2 lg:flex">
                      {" "}
                      <h1 className="font-panchang dark:text-mainWhite text-left text-sm">
                        Built with:
                      </h1>
                      {project.tags.map(({ key, name, icon: Icon }) => (
                        <span
                          key={key}
                          className="dark:border-mainWhite dark:text-mainWhite mr-2 border border-black px-2 py-1 text-xs"
                        >
                          {name} <Icon className="ml-1 inline-block" />
                        </span>
                      ))}
                      {isProjectOrLink({ project }) && (
                        <div className="mt-2 flex flex-col space-y-2">
                          <h1 className="font-panchang dark:text-mainWhite text-left text-sm">
                            Find here:
                          </h1>
                          <div className="flex space-x-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                className="dark:border-mainWhite dark:text-mainWhite border border-black px-2 py-1 text-xs"
                              >
                                <FaGithub />
                              </a>
                            )}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                className="dark:border-mainWhite dark:text-mainWhite border border-black px-2 py-1 text-xs"
                              >
                                <FaExternalLinkAlt strokeWidth={1} />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <img
                      alt={"" + project.name + " screenshot"}
                      className="max-w-[375 dark:border-mainWhite my-auto border border-black sm:max-w-[420px]"
                      src={project.img}
                    />
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="hover text-left hover:cursor-pointer"
                    >
                      <BsChevronCompactUp className="mx-auto" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};
