import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded-full text-black  
      `}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <LuX className="h-6 w-6 " />
      ) : (
        <LuAlignLeft className="h-6 w-6" />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
