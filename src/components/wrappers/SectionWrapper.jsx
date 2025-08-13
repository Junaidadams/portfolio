import { motion } from "framer-motion";
import PropTypes from "prop-types";
const SectionWrapper = ({ id, extraStyling, children }) => {
  return (
    <section
      id={id}
      className={`${extraStyling} bg-mainWhite dark:bg-[#0e0f0b] h-screen flex items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="w-11/12 h-11/12 overflow-auto border-black border-[1px] flex flex-col dark:border-mainWhite rounded-4xl relative xl:p-6 2xl:p-7"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  extraStyling: PropTypes.string,
  children: PropTypes.node,
};
