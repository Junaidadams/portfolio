import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { quickFacts } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const QuickFacts = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const intervalRef = useRef(null); // keep track of the timer

  const handleNewTileSelect = (key, valuesLength) => {
    // stop any previous timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // set the new active tile
    setActiveIndex(key);
    setActiveValueIndex(0);

    // start cycling through values
    intervalRef.current = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % valuesLength);
    }, 2500); // change value every 3s (adjust as needed)
  };

  // optional cleanup if component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Junaidadams"
        );
        setRepositories(response.data.public_repos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="flex w-full">
      <div className="text-mainBlack dark:text-mainWhite flex flex-col px-4 md:px-8">
        <h3 className="font font-panchang dark:text-mainWhite text-left mb-1">
          A few of my favorite things:
        </h3>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {quickFacts.map(
            ({
              key,
              value,
              name,
              icon: Icon,
              animationIcon: AnimationIcon,
            }) => (
              <motion.div
                key={key}
                onClick={() => handleNewTileSelect(key, value.length)}
                className={`border-mainBlack dark:border-mainWhite flex cursor-pointer flex-col border p-1 transition duration-500 md:p-3 ${
                  activeIndex === key
                    ? "bg-mainBlack dark:bg-mainWhite text-mainWhite dark:text-mainBlack"
                    : "text-mainBlack dark:text-mainWhite"
                }`}
              >
                <div className="flex">
                  <Icon className="h-6 w-5" />
                  {activeIndex === key && (
                    <motion.div
                      initial={{ x: 0, rotateY: 0 }}
                      animate={{ x: [0, -3, 0], rotateY: [0, 180, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                      className="h-6 w-5 ml-1"
                    >
                      <AnimationIcon />
                    </motion.div>
                  )}
                </div>

                <h3 className="font-panchang text-xs tracking-tight">{name}</h3>
                {activeIndex === key ? (
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeValueIndex} // 👈 force re-mount on index change
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.4,
                      }}
                      className="font-chillax text-xs"
                    >
                      {value[activeValueIndex]}
                    </motion.p>
                  </AnimatePresence>
                ) : (
                  <p className="font-chillax text-xs">{value[0]}</p>
                )}
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
