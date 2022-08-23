import { useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { DisableComponentsContext } from "../../Contexts/DisableComponentsContext";
import NotFound from "../NotFound/NotFound";
import HandlerPreloader from "../HandlerPreloader/HandlerPreloader";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import InputPassword from "../Form/InputPassword/InputPassword";
import useFormValidation from "../../utils/useFormValidation";

function Login({onLogin, isLoading, setIsLoading}) {
  const {path} = useRouteMatch();
  const disableComponents = useContext(DisableComponentsContext);
  const {values, setValues, valid, errorMessages, setErrorMessages, onChange, onBlur} = useFormValidation();

  function onSubmit(e) {
    e.preventDefault();
    const inputInvalid = [];

    if (!valid) {
      for (let name in values) {
        if (values[name].length <= 0) {
          inputInvalid[name] = 'Заполните это поле.';
        }
      }

      setErrorMessages({...errorMessages, ...inputInvalid});
      return;
    }

    setIsLoading(true);
    onLogin(values.email, values.password);
  };

  useEffect(() => {
    disableComponents({header: true, footer: true});
    setValues({email: '', password: ''})

    return () => {
      disableComponents({header: false, footer: false});
    }
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="login">
          <Link to="/">
            <Logo />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <Form className="login__form" formName="login" onSubmit={onSubmit}>
            <Input
              inputTitle="E-mail"
              classNameInput="input_border_bottom"
              type="email"
              inputName="email"
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
              className="login__button button-reset hover"
              type="submit"
              disabled={isLoading ? true : false}>
                <HandlerPreloader text="Войти" width={17} height={17} isLoading={isLoading} />
            </button>
          </Form>
          <p className="login__footer">
            Ещё не зарегистрированы?
            <Link className="login__link link hover" to="/signup">Регистрация</Link>
          </p>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Login;
