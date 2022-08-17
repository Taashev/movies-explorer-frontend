function MovieList({children, className=''}) {
  return (
    <section className={`movie-list ${className}`}>
      {children}
    </section>
  );
};

export default MovieList;
