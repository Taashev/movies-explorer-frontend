import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <Link className="not-found__button hover" to="/">Назад</Link>
    </div>
  );
};

export default NotFound;
