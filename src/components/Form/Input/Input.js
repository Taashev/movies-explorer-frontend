import { useState } from "react";
import IconsSvg from "../../IconsSvg/IconsSvg";

function Input({
  inputTitle,
  classNameGroup='',
  classNameInput='',
  inputName,
  type = 'text',
  required = false,
  placeholder,
  minLength,
  maxLenght,
  ...props
}) {
  const [value, setValue] = useState('');
  const [validity, setValidity] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  const [changeType, setChangeType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
    setValidity(e.target.validity.valid);
    setValidationMessage(e.target.validationMessage);
  }

  function showPasswordClick() {
    setShowPassword(!showPassword);

    !showPassword
    ? setChangeType('text')
    : setChangeType('password')
  }

  return (
    <label className="input-group">
      <span className="input-title">{inputTitle}</span>
      {
        inputName === 'password' &&
          <button
            className={`show-password ${showPassword ? 'show-password_active' : ''}`}
            onClick={showPasswordClick}>
            {
              showPassword
                ? <IconsSvg id="eye-show-svg" />
                : <IconsSvg id="eye-disable-svg" />
            }
          </button>
      }
      <input
        className={`input ${classNameInput} ${validity ? '' : 'input_error'}`}
        name={inputName}
        type={changeType}
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
