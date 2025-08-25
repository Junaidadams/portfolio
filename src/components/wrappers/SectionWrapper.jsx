import { motion } from "framer-motion";
import PropTypes from "prop-types";
const SectionWrapper = ({ id, extraStyling, children }) => {
  return (
    <section
      id={id}
      className={`${extraStyling} bg-mainWhite dark:bg-[#0e0f0b] flex items-center justify-center px-[31px] md:px-[40px] h-[calc(100vh-62px)] md:h-[calc(100vh-80px)]`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="w-full h-full overflow-auto border-black border-[1px] flex flex-col dark:border-mainWhite rounded-sm relative xl:p-6 2xl:p-7"
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
