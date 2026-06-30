import PropTypes from "prop-types";

import { LuAlignLeft, LuX } from "react-icons/lu";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Toggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`dark:text-mainWhite rounded-full p-[1px] text-black`}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <RiMenuUnfold2Line
          style={{ fontWeight: 100 }}
          className="h-6 w-6 font-thin"
        />
      ) : (
        <RiMenuUnfoldLine
          style={{ fontWeight: 100 }}
          className="h-6 w-6 font-thin"
        />
      )}
    </button>
  );
};

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
