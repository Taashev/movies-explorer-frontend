import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";
import ShortFilms from "./ShortFilms/ShortFilms";

function Search({
  onSubmit,
  formValidation,
  searchValue,
  handleValueSearch,
  shortFilms,
  onShortFilms,
}) {
  const {isLoading} = useContext(AppContext);

  return (
    <section className="search">
      <div className="search__container container">
        <form className="search__form" name="search" method="get" onSubmit={onSubmit} noValidate>
          <div className="search__wrapper">
            <input
              className={`search__input ${formValidation ? '' : 'search__input_invalid'}`}
              name="search"
              type="search"
              placeholder={formValidation ? `Фильм` : 'Нужно ввести ключевое слово'}
              required
              value={searchValue || ''}
              onChange={(e) => handleValueSearch(e)}
            />
            <button
              className="search__button hover"
              type="submit"
              disabled={isLoading ? true : false}
            >
                Найти
            </button>
          </div>
          <ShortFilms shortFilms={shortFilms} onShortFilms={onShortFilms} />
        </form>
      </div>
    </section>
  );
};

export default Search;
