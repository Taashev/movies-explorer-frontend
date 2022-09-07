import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import NotFoundImg from '../../images/404.png';

function NotFound() {
  const history = useHistory();
  const {disableComponents} = useContext(AppContext);

  function redirect() {
    if (history.length <= 2) return history.push('/');

    return history.goBack();
  };

  useEffect(() => {
    disableComponents({header: true, footer: true})

    return () => {
      disableComponents({header: false, footer: false})
    };
  }, [])

  return (
    <div className="not-found">
      <img className="not-found__img" src={NotFoundImg} alt="Ошибка 404. Страница не найдена" />
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__button hover" onClick={() => redirect()} type="button" aria-label="Вернуться на предыдущую страницу">
        Назад
      </button>
    </div>
  );
};

export default NotFound;


/*

*/
