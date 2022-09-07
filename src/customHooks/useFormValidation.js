import { useState } from "react";

function useFormValidation() {
  const [values, setValues] = useState({});
  const [valid, setValid] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  function onChange(e) {
    const element = e.target;
    const form = element.closest('form');
    const {name, value, validationMessage} = element;
    const formValidity = form.checkValidity();

    setValues({...values, [name]: value});
    setErrorMessages({...errorMessages, [name]: validationMessage});

    if (name === 'email' && !element.validity.valid) {
      setErrorMessages({...errorMessages, [name]: 'Поле E-mail заполнено некорректно'})
    }

    setValid(formValidity);
  };

  function onBlur(e) {
    const element = e.target;
    const form = element.closest('form');
    const {name, validationMessage} = element;
    const formValidity = form.checkValidity();

    setErrorMessages({...errorMessages, [name]: validationMessage});

    if (name === 'email' && !element.validity.valid) {
      setErrorMessages({...errorMessages, [name]: 'Поле E-mail заполнено некорректно'})
    }

    setValid(formValidity);
  };

  function formReset({newValues={}, newValid=false}) {
    setValues(newValues);
    setValid(newValid);
    setErrorMessages({});
  };

  return {
    values,
    setValues,
    valid,
    setValid,
    errorMessages,
    setErrorMessages,
    onChange,
    onBlur,
    formReset,
  };
};

export default useFormValidation;
