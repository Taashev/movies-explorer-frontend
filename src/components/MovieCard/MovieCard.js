import { useState } from "react";
import IconsSvg from "../IconsSvg/IconsSvg";

function MovieCard({movie, ...props}) {
  const [onFavorites, setOnFavorites] = useState(false);

  function handleFavorites() {
    setOnFavorites(!onFavorites);
  };

  return (
    <article className="movie" tabIndex="0">
      <div className="movie__cover">
        <img className="movie__image" src={movie.image} alt={movie.nameRu} />
      </div>
      <div className="movie__footer">
        <div className="movie__data">
          <h2 className="movie__name">{movie.nameRu}</h2>
          {
            props.button === 'cross-svg'
              ? <button className="movie__btn-delete">
                  <IconsSvg id="cross-svg" />
                </button>
              : <button className={
                  `movie__btn-favorites ${onFavorites ? 'movie__btn-favorites_active' : ''}`}
                  onClick={handleFavorites}>
                  <IconsSvg id="heart-svg" />
                </button>
          }
        </div>
        <div className="movie__meta">
          <span className="movie__duration">{movie.duration}</span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
