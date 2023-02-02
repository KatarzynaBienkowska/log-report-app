import PropTypes from "prop-types";

const Button = ({ children, type, onClick, className }) => (
  <button
    type={type}
    onClick={onClick}
    className={`border bg-gray-300 rounded hover:bg-gray-500 hover:text-white ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
