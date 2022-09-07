import {SHORT_MOVIE_DURATION} from "../utils/constants"

function filterShortFilms(list) {
  if (!list) return;

  return list.filter((movie) => {
    return movie.duration
      ? movie.duration <= SHORT_MOVIE_DURATION
      : false;
  });
}

export default filterShortFilms;
