import { useEffect } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Button from "../Button/Button";

function Login({setHeaderDisable, setFooterDisable}) {
  const {path} = useRouteMatch();

  function onSubmit(e) {
    e.preventDefault();
  };

  useEffect(() => {
    setHeaderDisable(true);
    setFooterDisable(true);

    return () => {
      setHeaderDisable(false);
      setFooterDisable(false);
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
              type="email"
              inputName="email"
              mods="border_bottom"
              required={true}
            />
            <Input
              inputTitle="Пароль"
              type="password"
              inputName="password"
              mods="border_bottom"
              required={true}
              minLength="2"
              maxLength="30"
            />
            <Button className="login__button hover" mods="size_big color" type="submit">Войти</Button>
          </Form>
          <p className="login__footer">
            Ещё не зарегистрированы?
            <Link className="login__link link hover" to="/signup">Регистрация</Link>
          </p>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound setHeaderDisable={setHeaderDisable} setFooterDisable={setFooterDisable} />
      </Route>
    </Switch>
  );
};

export default Login;
