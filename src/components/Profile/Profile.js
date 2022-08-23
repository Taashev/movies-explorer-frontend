import { useState, useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { DisableComponentsContext } from "../../Contexts/DisableComponentsContext";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import NotFound from "../NotFound/NotFound";
import useFormValidation from "../../utils/useFormValidation";
import HandlerPreloader from "../HandlerPreloader/HandlerPreloader";

function Profile({isLoading, setIsLoading, logout}) {
  const {path} = useRouteMatch();
  const {name, email} = useContext(CurrentUserContext);
  const disableComponents = useContext(DisableComponentsContext);
  const {values, setValues, errorMessages, setErrorMessages, onChange, onBlur} = useFormValidation();
  const [isLoadingExit, setIsLoadingExit] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    // onRegister(values.userName, values.email, values.password);
  };

  function handleClickExit() {
    setIsLoadingExit(true);
    logout();
  };

  useEffect(() => {
    disableComponents({footer: true, ...disableComponents});
    setValues({name, email});

    return () => {
      disableComponents({footer: false, ...disableComponents})
    }
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="profile">
          <h1 className="profile__title">Привет, {name}!</h1>
          <Form className="profile__form" formName="profile" onSubmit={onSubmit}>
            <Input
              inputTitle="Имя"
              type="text"
              inputName="name"
              required={true}
              minLength="2"
              maxLength="30"
              value={values.name}
              onChange={onChange}
              onBlur={onBlur}
              errorMessage={errorMessages.name}
            />
            <Input
              inputTitle="E-mail"
              type="email"
              inputName="email"
              required={true}
              value={values.email}
              onChange={onChange}
              onBlur={onBlur}
              errorMessage={errorMessages.email}
            />
            <button className="profile__button button-reset hover" type="submit">
              <HandlerPreloader text="Редактировать" width={16} height={16} isLoading={isLoading} />
            </button>
          </Form>
          <button className="profile__button profile__button_type_exit button-reset hover" type="button" onClick={handleClickExit}>
            <HandlerPreloader text="Выйти из аккаунта" width={16} height={16} isLoading={isLoadingExit} />
          </button>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Profile;
