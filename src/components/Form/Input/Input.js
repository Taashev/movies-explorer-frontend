function Input({
  inputTitle,
  classNameInput='',
  inputName,
  type = 'text',
  required = false,
  placeholder,
  minLength,
  maxLenght,
  value,
  errorMessage,
  onChange,
  onBlur,
  pattern,
}) {
  return (
    <div className="input-container">
      <label className="input-group">
        <span className="input-title">{inputTitle}</span>
        <input
          className={`input ${classNameInput} ${errorMessage ? 'input_error' : ''}`}
          name={inputName}
          type={type}
          value={value || ''}
          required={required}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLenght}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          pattern={pattern}
          />
        <p className="input-error">{errorMessage}</p>
      </label>
    </div>
  );
};

export default Input;
