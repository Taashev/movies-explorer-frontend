import { useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { DisableComponentsContext } from "../../Contexts/DisableComponentsContext";
import NotFound from "../NotFound/NotFound";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Button from "../Button/Button";

function Login() {
  const {path} = useRouteMatch();
  const disableComponents = useContext(DisableComponentsContext);

  function onSubmit(e) {
    e.preventDefault();
  };

  useEffect(() => {
    disableComponents({header: true, footer: true})

    return () => {
      disableComponents({header: false, footer: false})
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
            />
            <Input
              inputTitle="Пароль"
              classNameInput="input_border_bottom"
              type="password"
              inputName="password"
              required={true}
              minLength="2"
              maxLength="30"
            />
            <Button className="login__button hover" type="submit">Войти</Button>
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
