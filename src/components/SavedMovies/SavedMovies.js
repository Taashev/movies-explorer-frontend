import { useState, useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext";
import Search from "../Search/Search";
import filterKeyword from "../../utils/filterKeyword";
import filterShortFilms from "../../utils/filterShortFilms";
import MovieList from "../MovieList/MovieList";
import ButtonCardDelete from "../MovieCard/ButtonCardDelete/ButtonCardDelete";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

function SavedMovies() {
  const {path} = useRouteMatch();
  const {isLoading, isLoadingTimer, savedMovies} = useContext(AppContext);
  const [formValidation, setFormValidation] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const [renderMovies, setRenderMovies] = useState([]);

  function handleSubmitSearch(e) {
    let searchResult;
    const valid = e.target.checkValidity();

    e.preventDefault();

    if (!valid) return setFormValidation(valid);

    isLoadingTimer(500);
    setFormValidation(valid);
    searchResult = filterKeyword(savedMovies, searchValue);

    if (shortFilms) searchResult = filterShortFilms(searchResult);

    setRenderMovies(searchResult);
  }

  function handleValueSearch(e) {
    setSearchValue(e.target.value);
  };

  function handleShortFilms(e) {
    const element = e.target;
    const checked = element.checked;

    isLoadingTimer(500);
    setShortFilms(checked);

    if(checked) return setRenderMovies(filterShortFilms(renderMovies));

    setRenderMovies(filterKeyword(savedMovies, searchValue));
  };

  useEffect(() => {
    setRenderMovies(savedMovies);
  }, [savedMovies]);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="saved-movies">
          <Search
            onSubmit={handleSubmitSearch}
            formValidation={formValidation}
            handleValueSearch={handleValueSearch}
            searchValue={searchValue}
            shortFilms={shortFilms}
            onShortFilms={handleShortFilms}
          />
          {
            isLoading
             ? <Preloader width={50} height={50} />
             : <MovieList renderMovies={renderMovies} savedMovies={savedMovies} cardButton={ButtonCardDelete} />
          }
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default SavedMovies;
