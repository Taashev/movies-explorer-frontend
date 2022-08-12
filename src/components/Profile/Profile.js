import { useEffect } from "react";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Button from "../Button/Button";

function Profile({setFooterDisable}) {
  function onSubmit(e) {
    e.preventDefault();

    console.log(e)
  }

  useEffect(() => {
    setFooterDisable(true);

    return () => {
      setFooterDisable(false);
    }
  }, [])

  return (
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
  );
};

export default Profile;
