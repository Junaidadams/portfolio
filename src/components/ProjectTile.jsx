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
      <div className=" px-4 md:px-8">
        {projects.map((project, index) => (
          <div key={project.key} className="mb-5 mx">
            <button
              onClick={() => toggleAccordion(index)}
              className="font font-panchang text-left dark:text-mainWhite hover:cursor-pointer"
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
                    className=" text-gray-700 dark:text-gray-300 flex space-y-1 flex-col lg:flex-row lg:space-x-9"
                  >
                    <div className="sm:max-w-[420px] font-chillax lg:my-auto lg:h-fit">
                      <p className="lg:hidden mb-2">{project.shortDesc}</p>
                      <p className="hidden lg:block ">{project.longDesc}</p>
                      <div className="flex flex-row mb-2">
                        <div className="lg:hidden">
                          {project.tags.map(({ key, name, icon: Icon }) => (
                            <span
                              key={key}
                              className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1 sm:mr-2 mr-1"
                            >
                              {name} <Icon className="inline-block ml-[1px]" />
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-1 sm:space-x-2 lg:hidden">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1"
                            >
                              <FaGithub />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1"
                            >
                              <FaExternalLinkAlt strokeWidth={1} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex flex-col space-y-2">
                      {" "}
                      <h1 className="text-sm font-panchang text-left dark:text-mainWhite">
                        Built with:
                      </h1>
                      {project.tags.map(({ key, name, icon: Icon }) => (
                        <span
                          key={key}
                          className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1 mr-2"
                        >
                          {name} <Icon className="inline-block ml-1" />
                        </span>
                      ))}
                      {isProjectOrLink({ project }) && (
                        <div className="flex flex-col space-y-2 mt-2">
                          <h1 className="text-sm font-panchang text-left dark:text-mainWhite">
                            Find here:
                          </h1>
                          <div className="flex space-x-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1"
                              >
                                <FaGithub />
                              </a>
                            )}
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                className="text-xs border border-black dark:border-mainWhite dark:text-mainWhite px-2 py-1"
                              >
                                <FaExternalLinkAlt strokeWidth={1} />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <img
                      className="my-auto max-w-[375 sm:max-w-[420px] border border-black dark:border-mainWhite"
                      src={project.img}
                    />
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="hover:cursor-pointer hover  text-left"
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
