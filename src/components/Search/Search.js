import {useState, useRef } from 'react';

function Search() {
  const shortFilmsRef = useRef();
  const [conditionShortFilms, setConditionShortFilms] = useState(false);
  const [valueSearch, setValueSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleValueSearch(e) {
    setValueSearch(e.target.value);
  }

  function handleShortFilms() {
    setConditionShortFilms(!conditionShortFilms)
    shortFilmsRef.current.checked = !conditionShortFilms;
  }

  return (
    <section className="search">
      <div className="search__container container">
        <form className="search__form" name="search" method="get" onSubmit={handleSubmit}>
          <div className="search__wrapper">
            <input className="search__input" name="search" type="search" placeholder="Фильм" required value={valueSearch} onChange={handleValueSearch} />
            <button className="search__button hover" type="submit">Найти</button>
          </div>
          <label className="search__short-films-wrapper">
            <input className="search__short-films-switch" type="checkbox" name="short-films" ref={shortFilmsRef} />
            <button className="search__short-films-switch-costum" type="button" onClick={handleShortFilms} aria-label="Чек-бокс короткометражные фильмы"></button>
            <span className="search__short-films-text">Короткометражки</span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Search;
