import React from "react";
import PropTypes from "prop-types";

const InputField = React.forwardRef(function InputField(
  { label, type, id, placeholder },
  ref
) {
  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
        <span className="error-txt" id={`${id}Error`}>
          This field is required.
        </span>
      </label>
      <input
        type={type}
        id={id}
        className="input"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

InputField.displayName = "InputField";

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
