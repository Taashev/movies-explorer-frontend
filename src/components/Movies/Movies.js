import { useState, useEffect, useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext";
import useWindowWidth from "../../customHooks/useWindowWidth";
import filterKeyword from "../../utils/filterKeyword";
import filterShortFilms from "../../utils/filterShortFilms";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";
import ButtonCardLike from "../MovieCard/ButtonCardLike/ButtonCardLike";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader";

function Movies({
  handleMovies,
}) {
  const {path} = useRouteMatch();
  const {isLoading, isLoadingTimer} = useContext(AppContext);
  const {windowWidth, addEventListener, removeEventListener} = useWindowWidth();

  const [formValidation, setFormValidation] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const [renderMovies, setRenderMovies] = useState([]);
  const [renderMoviesCount, setRenderMoviesCount] = useState(12);
  const [renderButtonMore, setRenderButtonMore] = useState(false);

  function handleMoreClick() {
    const moreMoviesCount = windowWidth >= 1280 ? 3 : windowWidth >= 600 ? 2 : 1;
    setRenderMoviesCount(renderMoviesCount + moreMoviesCount);
  };

  function handleFilterKeyword() {
    return filterKeyword(
      JSON.parse(localStorage.getItem('Movies')),
      localStorage.getItem('lastSearchValue'),
    );
  };

  function handleValueSearch(e) {
    setSearchValue(e.target.value);
  };

  function handleShortFilms(e) {
    const element = e.target;
    const checked = element.checked;

    isLoadingTimer(500);
    setShortFilms(checked);
    localStorage.setItem('lastSearchShortFilms', checked);

    if(checked) return setRenderMovies(filterShortFilms(renderMovies));

    setRenderMovies(handleFilterKeyword());
  };

  async function handleSubmitSearch(e) {
    let searchResult;
    const valid = e.target.checkValidity();

    e.preventDefault();

    if (!valid) return setFormValidation(valid);

    if (!localStorage.getItem('Movies')) await handleMovies();

    isLoadingTimer(500);
    setFormValidation(valid);
    localStorage.setItem('lastSearchValue', searchValue);
    searchResult = handleFilterKeyword();

    if(shortFilms) searchResult = filterShortFilms(searchResult);

    setRenderMovies(searchResult);
  };

  useEffect(() => {
    setRenderMoviesCount(windowWidth >= 1280 ? 12 : windowWidth >= 600 ? 8 : 5);
  }, [windowWidth]);

  useEffect(() => {
    const check = !!renderMovies ? renderMoviesCount < renderMovies.length : false;
    setRenderButtonMore(check);
  }, [renderMovies, renderMoviesCount]);

  useEffect(() => {
    const lastSearchResult = handleFilterKeyword();
    const lastSearchValue = localStorage.getItem('lastSearchValue');
    const lastSearchShortFilms = JSON.parse(localStorage.getItem('lastSearchShortFilms'));

    setSearchValue(lastSearchValue ?? '');
    setShortFilms(lastSearchShortFilms ?? false);
    addEventListener();

    lastSearchShortFilms
      ? setRenderMovies(filterShortFilms(lastSearchResult))
      : setRenderMovies(lastSearchResult);

    return () => removeEventListener();
  }, []);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="movies">
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
              ?
                <Preloader width={50} height={50} />
              :
                localStorage.getItem('Movies') && <>
                  <MovieList renderMovies={renderMovies.slice(0, renderMoviesCount)} cardButton={ButtonCardLike} />
                  {
                    renderButtonMore &&
                      <button className="movies__btn-more hover" type="button" onClick={handleMoreClick}>Ещё</button>
                  }
                </>
          }
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Movies;
