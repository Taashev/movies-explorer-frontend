import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NotFoundImg from '../../images/404.png';

function NotFound({ setHeaderDisable, setFooterDisable }) {
  const history = useHistory();

  useEffect(() => {
    setHeaderDisable(true);
    setFooterDisable(true);

    return () => {
      setHeaderDisable(false);
      setFooterDisable(false);
    };
  }, [])

  return (
    <div className="not-found">
      <img className="not-found__img" src={NotFoundImg} alt="Ошибка 404. Страница не найдена" />
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__button hover" onClick={() => history.goBack()} aria-label="Вернуться на предыдущую страницу">
        Назад
      </button>
    </div>
  );
};

export default NotFound;
