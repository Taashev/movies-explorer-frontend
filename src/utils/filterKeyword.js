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

    if (checkNameRU || checkNameEN) return movie;
  });

};

export default filterKeyword;
