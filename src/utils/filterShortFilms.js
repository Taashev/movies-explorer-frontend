function filterShortFilms(list) {
  if (!list) return;

  return list.filter((movie) => {
    return movie.duration
      ? movie.duration <= 40
      : false;
  });
}

export default filterShortFilms;
