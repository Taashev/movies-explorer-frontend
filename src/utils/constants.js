const REGEX_EMAIL = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

const WINDOW_WIDTH_POINTS = {
  DESKTOP: 1280,
  TABLET: 600
};

const COUNT_MOVIES = {
  DESKTOP: 3,
  TABLET: 2,
  MOBILE: 1
};

const START_COUNT_MOVIES = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 5
};

const SHORT_MOVIE_DURATION = 40;

export {
  REGEX_EMAIL,
  WINDOW_WIDTH_POINTS,
  COUNT_MOVIES,
  START_COUNT_MOVIES,
  SHORT_MOVIE_DURATION,
};
