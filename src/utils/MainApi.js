const BASEURL = 'https://api.movie.taashev.nomoredomains.xyz';

const request = ({method='GET', point='', body}) => {
  return fetch(`${BASEURL}${point}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      if (res.ok) { return res.json() }

      throw Error(res.status);
    })
};

const register = (name, email, password) => {
  return request({
    method: 'POST',
    point: '/signup',
    body: {
      "name": name,
      "email": email,
      "password": password,
    },
  });
};

const login = (email, password) => {
  return request({
    method: 'POST',
    point: '/signin',
    body: {
      'email': email,
      'password': password,
    },
  });
};

const logout = () => {
  return request({
    point: '/signout',
  });
};

const getUserInfo = () => {
  return request({
    point: '/users/me'
  });
};

const updateUser = (name, email) => {
  return request({
    method: 'PATCH',
    point: '/users/me',
    body: {
      name: name,
      email: email,
    },
  });
};

const createSavedMovie = (movie) => {
  return request({
    method: 'POST',
    point: '/movies',
    body: {...movie}
  });
};

const getSavedMovies = () => {
  return request({
    point: '/movies/me',
  });
};

const deleteSavedMovie = (movieId) => {
  return request({
    method: 'DELETE',
    point: `/movies/${movieId}`
  });
};

const MainApi = {
  register,
  login,
  logout,
  getUserInfo,
  updateUser,
  createSavedMovie,
  getSavedMovies,
  deleteSavedMovie,
};

export default MainApi;
