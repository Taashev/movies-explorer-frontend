import { useContext, useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import HandlerPreloader from "../HandlerPreloader/HandlerPreloader";
import NotFound from "../NotFound/NotFound";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import InputPassword from "../Form/InputPassword/InputPassword";
import useFormValidation from "../../utils/useFormValidation";
import { DisableComponentsContext } from "../../Contexts/DisableComponentsContext";

function Register({onRegister, isLoading, setIsLoading}) {
  const {path} = useRouteMatch();
  const disableComponents = useContext(DisableComponentsContext);
  const {values, setValues, valid, errorMessages, setErrorMessages, onChange, onBlur} = useFormValidation();

  function onSubmit(e) {
    e.preventDefault();
    const inputInvalid = [];

    if(!valid) {
      for (let name in values) {
				if (values[name].length <= 0) {
					inputInvalid[name] = 'Заполните это поле.';
				}
			}

			setErrorMessages({...errorMessages, ...inputInvalid});
      return
    }

    setIsLoading(true);
    onRegister(values.userName, values.email, values.password);
  }

  useEffect(() => {
    disableComponents({header: true, footer: true});
    setValues({userName: '', email: '', password: ''});

    return () => {
      disableComponents({header: false, footer: false});
    }
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="register">
          <Link className="register__link hover" to="/">
            <Logo />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <Form className="register__form" formName="register" onSubmit={onSubmit}>
            <Input
              inputTitle="Имя"
              classNameInput="input_border_bottom"
              inputName="userName"
              type="text"
              required={true}
              minLength="2"
              maxLength="30"
              value={values.userName}
              errorMessage={errorMessages.userName}
              onChange={onChange}
              onBlur={onBlur}
              />
            <Input
              inputTitle="E-mail"
              classNameInput="input_border_bottom"
              inputName="email"
              type="email"
              required={true}
              value={values.email}
              errorMessage={errorMessages.email}
              onChange={onChange}
              onBlur={onBlur}
              />
            <InputPassword
              classNameInput="input-pass__input_border_bottom"
              value={values.password}
              errorMessage={errorMessages.password}
              onChange={onChange}
              onBlur={onBlur}
            />
            <button
              className="register__button button-reset hover"
              type="submit"
              disabled={isLoading ? true : false}>
                <HandlerPreloader text="Зарегистрироваться" width={17} height={17} isLoading={isLoading} />
            </button>
          </Form>
          <p className="register__footer">
            Уже зарегистрированы?
            <Link className="register__link link hover" to="/signin">Войти</Link>
          </p>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Register;
