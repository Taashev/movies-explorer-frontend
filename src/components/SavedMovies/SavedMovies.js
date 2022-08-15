import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";
import MovieCard from "../MovieCard/MovieCard";

import { constants } from '../../utils/constants';

function SavedMovies() {
  const {path} = useRouteMatch();
  const { getSaveMovies } = constants;

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="saved-movies">
          <Search />
          <MovieList>
            {getSaveMovies.map((movie) => <MovieCard key={movie.movieId} movie={movie} button="cross-svg" />)}
          </MovieList>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default SavedMovies;
