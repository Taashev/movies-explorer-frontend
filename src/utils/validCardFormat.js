function validCardFormat(movie) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    id,
    nameRU,
    nameEN,
  } = movie;

  const formatCard = {
    country: country || 'Неизвестно',
    director: director || 'Неизвестно',
    duration: duration || 0,
    year: year || '',
    description: description || ' ',
    image: `https://api.nomoreparties.co/${image.url}`,
    trailerLink: trailerLink,
    thumbnail: thumbnail || `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
    movieId: id,
    nameRU: nameRU || 'Без названия',
    nameEN: nameEN || 'Untitled',
  };

  return formatCard;
};

export {
  validCardFormat,
};
