import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

function MovieCard({movie, cardButton: Button}) {
  const {savedMovies, onAddSavedMovie, onDeletSavedMovie} = useContext(AppContext);
  const [isSaved, setIsSaved] = useState(false);
  let currentSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId)

  function timeConversion() {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

    return `${hours}ч ${minutes}м`;
  };

  function handleCardClick(e) {
    if (e.target.closest('button')) return;

    window.open(movie.trailerLink, '_blank');
  };

  function handleAddCard() {
    onAddSavedMovie(movie);
  };

  function handleDeleteCard() {
    onDeletSavedMovie(currentSavedMovie._id);
  };

  useEffect(() => {
    setIsSaved(savedMovies.some((item) => item.movieId === movie.movieId));
  }, [savedMovies]);

  return (
    <article className="movie" tabIndex="0" onClick={handleCardClick}>
      <div className="movie__cover">
        <img className="movie__image" src={movie.image} alt={movie.nameRU} />
      </div>
      <div className="movie__footer">
        <div className="movie__data">
          <h2 className="movie__name">{movie.nameRU}</h2>
          <Button movie={movie} currentSavedMovie={currentSavedMovie} onAddCard={handleAddCard} onDeleteCard={handleDeleteCard} isSaved={isSaved} />
        </div>
        <div className="movie__meta">
          <span className="movie__duration">{timeConversion()}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
