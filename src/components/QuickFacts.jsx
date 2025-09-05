import { useState, useEffect } from "react";
import axios from "axios";
import { quickFacts } from "../../constants";
import { motion } from "framer-motion";

const QuickFacts = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);

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
        <h3 className="font font-panchang dark:text-mainWhite text-left">
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
              <div
                key={key}
                onClick={() =>
                  setActiveIndex((prev) => (prev === key ? null : key))
                }
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
                      initial={{ y: 0 }}
                      animate={{ y: [0, -1, 0] }} // bounce up a little
                      transition={{
                        duration: 0.9, // time for one bounce cycle
                        repeat: Infinity, // loop forever
                        repeatType: "loop", // continuous loop
                        ease: "easeInOut",
                      }}
                      className="h-6 w-5"
                    >
                      <AnimationIcon />
                    </motion.div>
                  )}
                </div>

                <h3 className="font-panchang text-xs tracking-tight">{name}</h3>
                <p className="font-chillax text-xs">{value}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
