import React, { useState, useEffect } from "react";
import { validateInput, validate } from "../../Utility";
import Eye from "../../Asset/SVG/Eye";
import "./index.scss";

const Input = ({
  type = "text",
  name,
  placeHolder = "place Holder",
  value,
  errorMsg = "",
  required,
  validateSelf,
  handleChange,
  reviel,
  revielPassword,
  className,
  label = "",
  pattern,
}) => {
  const [error, setError] = useState(false);

  const inputRef = React.createRef();

  useEffect(() => {
    if (validateSelf) {
      const isValid = validate(value, name);

      if (!isValid) {
        inputRef.current.classList.add("typing", "invalid");
        setError(true);
      }
    }

    return () => {};
  }, [inputRef, name, validateSelf, value]);

  const validateOne = (event) => {
    handleChange(event, error);
    if (!validateInput(event)) {
      inputRef.current.classList.add("invalid");
      setError(true);
    } else {
      inputRef.current.classList.remove("invalid");
      setError(false);
    }
  };

  return (
    <div className='input-div'>
      <div className='input'>
        <label>{label}</label>
        <input
          className={`input-type ${className}`}
          ref={inputRef}
          type={reviel ? "text" : type}
          required={required}
          name={name}
          onChange={validateOne}
          // value={value}
          placeholder={placeHolder}
          pattern={pattern}
        />
        {value && revielPassword ? (
          <span onClick={revielPassword} className='reviel-password'>
            <Eye />
          </span>
        ) : null}
      </div>
      <p className='error' style={{ display: error ? "block" : "none" }}>
        {errorMsg}
      </p>
    </div>
  );
};

export default Input;
