import { useState } from "react";

function useFormValidation() {
  const [values, setValues] = useState({});
  const [valid, setValid] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  function onChange(e) {
    const {name, value} = e.target;
    const formValidity = e.target.closest('form').checkValidity();

    setValues({...values, [name]: value});
    setErrorMessages({...errorMessages, [name]: e.target.validationMessage});
    setValid(formValidity);
  }

  function onBlur(e) {
    const {name} = e.target;
    const formValidity = e.target.closest('form').checkValidity();

    setErrorMessages({...errorMessages, [name]: e.target.validationMessage});
    setValid(formValidity);
  }

  function formReset({newValues={}, newValid=false}) {
    setValues(newValues);
    setValid(newValid);
    setErrorMessages({});
  }

  return {
    values,
    setValues,
    valid,
    errorMessages,
    setErrorMessages,
    onChange,
    onBlur,
    formReset,
  }
}

export default useFormValidation;
