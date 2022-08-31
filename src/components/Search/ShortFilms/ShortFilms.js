function ShortFilms({shortFilms, onShortFilms}) {
  return (
    <label className="short-films__wrapper">
      <input
        className="short-films__switch"
        type="checkbox"
        name="short-films"
        aria-label="Чек-бокс короткометражные фильмы"
        checked={shortFilms}
        onChange={(e) => onShortFilms(e)}
      />
      <span className="short-films__switch-costum"></span>
      <span className="short-films__text">Короткометражки</span>
    </label>
  );
};

export default ShortFilms;
