import { useState } from "react";
import IconsSvg from "../../IconsSvg/IconsSvg";

function InputPassword({
  classNameInput='',
  placeholder,
  value,
  errorMessage,
  onChange,
  onBlur,
}) {
  const [type, setType] = useState('password');
  const [showPassword, setShowPassword] = useState(false);

  function showPasswordClick() {
    setShowPassword(!showPassword);

    !showPassword
      ? setType('text')
      : setType('password')
  }

  return (
    <div className="input-pass">
      <label className="input-pass__group">
        <span className="input-pass__title">Пароль</span>
        <input
          className={`input-pass__input ${classNameInput} ${errorMessage ? 'input-pass__input_type_error' : ''}`}
          name="password"
          type={type}
          value={value || ''}
          required
          placeholder={placeholder}
          minLength="3"
          maxLength="30"
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          />
        <p className="input-pass__error">{errorMessage}</p>
      </label>
      <button className="input-pass__show-pass" type="button" onClick={showPasswordClick}>
        <IconsSvg id={type === 'password' ? `eye-show-svg` : 'eye-disable-svg'}  />
      </button>
    </div>
  );
};

export default InputPassword;
