import { useState, useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import NotFound from "../NotFound/NotFound";
import useFormValidation from "../../customHooks/useFormValidation";
import Preloader from "../Preloader/Preloader";
import { renderToastify } from "../Toastify/Toastify";

function Profile({logout, onUpdateUser}) {
  const {path} = useRouteMatch();
  const {disableComponents, isLoading, setIsLoading} = useContext(AppContext);
  const {name, email} = useContext(CurrentUserContext);
  const {values, setValues, valid, errorMessages, onChange, onBlur} = useFormValidation();
  const [isLoadingExit, setIsLoadingExit] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (name === values.name && email === values.email) {
      return renderToastify('info', 'Внесите изменения в соответствующие поля.');
    }

    if (!valid) {return}

    setIsLoading(true);
    onUpdateUser(values.name, values.email);
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
            <button
              className="profile__button button-reset hover"
              type="submit"
              disabled={isLoading ? true : false}
            >
              {
                isLoading
                  ? <Preloader width={16} height={16} />
                  : 'Редактировать'
              }
            </button>
          </Form>
          <button
            className="profile__button profile__button_type_exit button-reset hover"
            type="button"
            onClick={handleClickExit}
            disabled={isLoadingExit ? true : false}
          >
            {
              isLoadingExit
                ? <Preloader width={16} height={16} />
                : 'Выйти из аккаунта'
            }
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
