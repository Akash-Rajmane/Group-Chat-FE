import {useId} from 'react';
import PropTypes from "prop-types";

const AuthInput = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    autoComplete="on",
    required
}) => {
    const id = useId();


  return (
    <div className="my-8 content-center text-dark_text_1 space-y-1">
      <label htmlFor={name} className="text-sm font-bold tracking-wide">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        className="w-full bg-dark_bg_3 text-base py-2 px-4 rounded-lg outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required || false}
      />
    </div>
  );
};

AuthInput.propTypes = {
    name: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    placeholder: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired, 
    autoComplete: PropTypes.string, 
    required: PropTypes.bool
};

export default AuthInput;
