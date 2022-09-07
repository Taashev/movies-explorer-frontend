import MovieCard from "../MovieCard/MovieCard";

function MovieList({renderMovies=[], className='', ...props}) {
  const listEmpty = renderMovies.length <= 0;

  return (
    <section className={`movie-list ${listEmpty ? 'movie-list_list-empty' : ''} ${className}`}>
      {
        listEmpty
          ? <p className="movie-list__not-found">Ничего не найдено</p>
          : renderMovies.map((movie) => {
              return <MovieCard key={movie.movieId} movie={movie} {...props} />
            })
      }
    </section>
  );
};

export default MovieList;
