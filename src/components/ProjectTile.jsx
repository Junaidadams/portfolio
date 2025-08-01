import { projects } from "../../constants";
import { useState } from "react";

import { motion } from "framer-motion";

import { LuFolderGit2, LuX } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";

export const ProjectTile = () => {
  const [focused, setFocused] = useState(null);

  const handleClose = () => {
    setFocused(null);
  };

  return (
    <div className=" m-auto">
      <div className=" grid grid-cols-1  md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.key}
            whileHover={{ x: 2 }}
            onClick={() => setFocused(project)}
            className="relative hover:cursor-pointer md:mx-2" // Ensure this div is positioned relative to its content
          >
            {project.img && (
              <div className="bg-gradient-to-b from-gray-500 to-gray-800 shadow-lg p-[1px] relative my-2">
                <div
                  className="w-full h-36 bg-cover bg-center rounded-sm "
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                >
                  <div className="w-full h-full backdrop-blur-xl">
                    <img
                      src={project.img}
                      className="object-contain h-36 mx-auto"
                    />
                    <h1 className="absolute bottom-1 left-1 text-white text-base font-semibold z-1- backdrop-blur-lg bg-[#0000004b] p-1 rounded-sm bg-opacity-50">
                      {project.name}
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {focused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10"
          onClick={handleClose}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the container
          >
            {/* Container matches image size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative rounded-sm bg-[#f5f5f5] inline-block w-[90vw] h-[70vh]"
            >
              <img
                src={focused.img}
                alt={focused.name}
                className="w-full h-full object-contain rounded"
              />
              {/* Button positioned relative to the image */}
              {focused.link && (
                <a
                  href={focused.link}
                  target="_blank"
                  className={`absolute top-2 ${
                    focused.github ? "right-[155px]" : "right-20"
                  } text-white text-2xl font-bold bg-black bg-opacity-70 shadow-2xl px-4 py-2 rounded hover:bg-opacity-75`}
                >
                  <GoLinkExternal />
                </a>
              )}

              {focused.github && (
                <a
                  href={focused.github}
                  target="_blank"
                  className="absolute top-2 right-20 text-white text-2xl font-bold bg-black bg-opacity-70 shadow-2xl px-4 py-2 rounded hover:bg-opacity-75"
                >
                  <LuFolderGit2 />
                </a>
              )}

              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-70 shadow-2xl px-4 py-2 rounded hover:bg-opacity-75"
                onClick={handleClose}
              >
                <LuX />
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};
