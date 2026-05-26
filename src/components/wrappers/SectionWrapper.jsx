import { motion } from "framer-motion";
import { head } from "framer-motion/client";
import PropTypes from "prop-types";
const SectionWrapper = ({
  id,
  extraStyling,
  children,
  heading,
  subHeading,
}) => {
  return (
    <section
      id={id}
      className={`${extraStyling} bg-mainWhite dark:bg-[#0e0f0b] flex items-center justify-center px-[31px] md:px-[40px] h-[calc(100dvh-62px)] md:h-[calc(100vh-80px)]`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="w-full h-full overflow-auto border-black border-[1px] flex flex-col dark:border-mainWhite relative px-4 md:px-8 xl:p-6 2xl:p-7"
      >
        {heading ? (
          <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl py-4 text-3xl font-extralight sm:py-6 md:py-8 md:text-4xl">
            <h2>{heading}</h2>
            <p className="text-base font-semibold">{subHeading}</p>
          </div>
        ) : (
          ""
        )}
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
