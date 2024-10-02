const BASEURL = 'https://api.movies-explorer.taashev92.ru';

const checkResponse = (res) => {
  if (res.ok) { return res.json() }

  return res.json().then((data) => {throw new Error(data.message)})
};

// register
const register = (name, email, password) => {
  return fetch(`${BASEURL}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({name, email, password})
  }).then(checkResponse)
};

// login
const login = (email, password) => {
  return fetch(`${BASEURL}/signin`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({email, password})
  }).then(checkResponse)
};

// logout
const logout = () => {
  return fetch(`${BASEURL}/signout`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  }).then(checkResponse)
};

// user info
const getUserInfo = () => {
  return fetch(`${BASEURL}/users/me`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  }).then(checkResponse)
};

// update user
const updateUser = (name, email) => {
  return fetch(`${BASEURL}/users/me`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({name, email})
  }).then(checkResponse)
};

// get saved movies
const getSavedMovies = () => {
  return fetch(`${BASEURL}/movies/me`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  }).then(checkResponse)
};

// create saved movie
const setSavedMovies = (movie) => {
  return fetch(`${BASEURL}/movies`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({...movie})
  }).then(checkResponse)
};

// delete saved movie
const deleteSavedMovie = (movieId) => {
  return fetch(`${BASEURL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
  }).then(checkResponse)
};

const MainApi = {
  register,
  login,
  logout,
  getUserInfo,
  updateUser,
  setSavedMovies,
  getSavedMovies,
  deleteSavedMovie,
};

export default MainApi;
