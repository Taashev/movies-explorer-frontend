function Input({
  inputTitle,
  classNameInput='',
  mods = '',
  inputName,
  type = 'text',
  required = false,
  placeholder,
  minLength,
  maxLenght
}) {
  const inputMod = mods.split(' ').map((mod) => `input_${mod}`).join(' ');

  return (
    <label className="input-group">
      <input
        className={`input ${classNameInput} ${mods ? inputMod : ''}`}
        name={inputName}
        type={type}
        required={required}
        minLength={minLength}
        maxLength={maxLenght}
        placeholder={placeholder}
        />
      <span className="input-title">{inputTitle}</span>
      <p className="input-error"></p>
    </label>
  );
};

export default Input;
