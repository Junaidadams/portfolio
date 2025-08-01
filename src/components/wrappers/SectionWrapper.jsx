import PropTypes from "prop-types";
const SectionWrapper = ({ id, extraStyling, children }) => {
  return (
    <section
      id={id}
      className={`${extraStyling} bg-mainWhite dark:bg-[#0e0f0b] h-screen flex items-center justify-center`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  extraStyling: PropTypes.string,
  children: PropTypes.node,
};
