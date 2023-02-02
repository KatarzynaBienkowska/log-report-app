import PropTypes from "prop-types";

const Input = ({ label, type, required, onChange }) => (
  <div className="flex flex-col">
    <label className="flex">
      {label}
      {required && <span className="text-red-600 pl-1">*</span>}
    </label>
    <input
      type={type}
      required={required}
      onChange={onChange}
      className="border-2 rounded"
    ></input>
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
