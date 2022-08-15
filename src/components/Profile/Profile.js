import { useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { DisableComponentsContext } from "../../Contexts/DisableComponentsContext";
import NotFound from "../NotFound/NotFound";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Button from "../Button/Button";

function Profile() {
  const {path} = useRouteMatch();
  const disableComponents = useContext(DisableComponentsContext);

  function onSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    disableComponents({footer: true, ...disableComponents});

    return () => {
      disableComponents({footer: false, ...disableComponents})
    }
  }, [])

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <Form className="profile__form" formName="profile" onSubmit={onSubmit}>
            <Input
              inputTitle="Имя"
              type="text"
              inputName="name"
              required={true}
            />
            <Input
              inputTitle="E-mail"
              type="email"
              inputName="email"
              required={true}
            />
            <Button className="profile__button hover" type="submit">Редактировать</Button>
          </Form>
            <Button className="profile__button profile__button_type_exit hover" type="button">Выйти из аккаунта</Button>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Profile;
