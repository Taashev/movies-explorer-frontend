import { useEffect } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Button from "../Button/Button";

function Register({ setHeaderDisable, setFooterDisable }) {
  const {path} = useRouteMatch();

  function onSubmit(e) {
    e.preventDefault();
  }

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
        <main className="register">
          <Link className="register__link hover" to="/">
            <Logo />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <Form className="register__form" formName="register" onSubmit={onSubmit}>
            <Input
              inputTitle="Имя"
              mods="border_bottom"
              inputName="userName"
              type="text"
              required={true}
              minLength="2"
              maxLength="30"
              />
            <Input
              inputTitle="E-mail"
              mods="border_bottom"
              inputName="email"
              type="email"
              required={true}
              />
            <Input
              inputTitle="Пароль"
              mods="border_bottom"
              inputName="password"
              type="password"
              required={true}
              minLength="2"
              maxLength="30"
              />
            <Button className="register__button" mods="size_big color" type="submit">Зарегистрироваться</Button>
          </Form>
          <p className="register__footer">
            Уже зарегистрированы?
            <Link className="register__link link hover" to="/signin">Войти</Link>
          </p>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound setHeaderDisable={setHeaderDisable} setFooterDisable={setFooterDisable} />
      </Route>
    </Switch>
  );
};

export default Register;
