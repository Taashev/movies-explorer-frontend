import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";
import MovieCard from '../MovieCard/MovieCard';

import { constants } from '../../utils/constants';

function Movies() {
  const {path} = useRouteMatch();
  const { getMovies } = constants;

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <main className="movies">
          <Search />
          <MovieList>
            {getMovies.map((movie) => <MovieCard key={movie.movieId} movie={movie} button="heart-svg" />)}
          </MovieList>
          <button className="movies__btn-more hover" type="button">Ещё</button>
        </main>
      </Route>
      <Route path={`${path}*`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Movies;
