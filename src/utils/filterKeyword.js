function filterKeyword(list, keyword) {
  if (!list || !keyword) return list;

  const searchValue = keyword.toLowerCase();

  return list.filter((movie) => {
    const checkNameRU = movie.nameRU
      ? movie.nameRU.toLowerCase().includes(searchValue)
      : false;
    const checkNameEN = movie.nameEN
      ? movie.nameEN.toLowerCase().includes(searchValue)
      : false;
    const checkDirector = movie.director
      ? movie.director.toLowerCase().includes(searchValue)
      : false;
    const checkCountry = movie.country
      ? movie.country.toLowerCase().includes(searchValue)
      : false;

    if (
        checkNameRU
        || checkNameEN
        || checkDirector
        || checkCountry
      ) {return movie}
  });

};

export default filterKeyword;
