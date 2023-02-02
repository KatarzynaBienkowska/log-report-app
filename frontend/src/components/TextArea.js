import PropTypes from "prop-types";

const TextArea = ({ label, required, onChange }) => (
  <div className="flex flex-col">
    <label>
      {label}
      {required && <span className="text-red-600 pl-1">*</span>}
    </label>
    <textarea
      type="text"
      required={required}
      onChange={onChange}
      className="border-2 rounded"
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TextArea;
