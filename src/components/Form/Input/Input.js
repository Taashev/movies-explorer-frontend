import { useState } from "react";

function Input({
  inputTitle,
  classNameInput='',
  inputName,
  type = 'text',
  required = false,
  placeholder,
  minLength,
  maxLenght
}) {
  const [value, setValue] = useState('');
  const [validity, setValidity] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    setValidity(e.target.validity.valid);
    setValidationMessage(e.target.validationMessage);
  }

  return (
    <label className="input-group">
      <span className="input-title">{inputTitle}</span>
      <input
        className={`input ${classNameInput} ${validity ? '' : 'input_error'}`}
        name={inputName}
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLenght}
        />
      <p className="input-error">{validationMessage}</p>
    </label>
  );
};

export default Input;
