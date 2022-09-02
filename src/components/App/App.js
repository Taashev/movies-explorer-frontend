import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../../Hoc/ProtectedRoute';

// Context
import { AppContext } from '../../Contexts/AppContext'
import { CurrentUserContext } from '../../Contexts/CurrentUserContext';

// API
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';

// Components
import Overlay from '../Overlay/Overlay';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import { Toastify, renderToastify } from '../Toastify/Toastify';
import { validCardFormat } from '../../utils/validCardFormat';

// App
function App() {
  const root = document.documentElement;
  const body = document.querySelector('body');
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  // use state
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [stateMenu, setStateMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disableComponents, setDisableComponents] = useState({header: false, footer: false});
  const [savedMovies, setSavedMovies] = useState([]);

  // handle burger close
  function handleBurgerClose() {
    setStateMenu(false);
  };

  // handleClickBurger
  function handleClickBurger() {
    setStateMenu(!stateMenu);
  }

  // handle theme
  function handleThemeChenge(theme) {
    let themeValue = theme.target.value;

    setTheme(themeValue);
    localStorage.setItem('theme', themeValue);
  };

  // handle loading timer
  function isLoadingTimer(time=0) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, [time])
  };

  // handle register
  function handleRegister(name, email, password) {
    return MainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        renderToastify('error', err.message)
      })
      .finally(() => setIsLoading(false))
  };

  // handle login
  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        getUserInfo();
        setLoggedIn(true);
        history.push('/movies');
        renderToastify('success', `${res.name} приятного просмотра!`);
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => setIsLoading(false))
  };

  // handle logout
  function handleLogout() {
    MainApi.logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('Movies');
        localStorage.removeItem('lastSearchValue');
        localStorage.removeItem('lastSearchShortFilms');
        renderToastify('info', `Вот и все.`);
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => setIsLoading(false))
  }

  // get user info
  function getUserInfo() {
    return MainApi.getUserInfo()
      .then(({name, email, _id}) => {
        setCurrentUser({name, email, _id});
      })
  }

  // check token
  function checkAuth() {
    getUserInfo()
      .then(() => {
        setLoggedIn(true);
        // history.push(currentPath);
      })
  };

  // handle update user
  function handleUpdateUser(name, email) {
    MainApi.updateUser(name, email)
      .then(({name, email}) => {
        renderToastify('success', 'Данные обновлены!')
        setCurrentUser({name, email})
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => setIsLoading(false))
  };

  // handle movies
  async function handleMovies() {
    setIsLoading(true);

    return await MoviesApi()
      .then((res) => {
        const formattedListCard = res.map((movie) => validCardFormat(movie));
        localStorage.setItem('Movies', JSON.stringify(formattedListCard));
      })
      .catch(() => renderToastify('error', 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
      .finally(() => setIsLoading(false))
  };

  // handle saved movies
  function handleSavedMovies() {
    MainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => setIsLoading(false))
  };

  // handle add saved movies
  function handleAddSavedMovie(movie) {
    MainApi.setSavedMovies(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => renderToastify('error', err.message))
  };

  // handle delete saved movies
  function handleDeleteSavedMovie(movieId) {
    MainApi.deleteSavedMovie(movieId)
      .then((res) => {
        setSavedMovies((state) => state.filter((movie) => movie.movieId !== res.movieId));
      })
      .catch((err) => renderToastify('error', err.message))
  };

  // component did mount
  useEffect(() => {
    checkAuth();
  }, []);

  // component did update loggenIn
  useEffect(() => {
    loggedIn && handleSavedMovies();
  }, [loggedIn]);

  // component did update no-scroll
  useEffect(() => {
    if(stateMenu) return body.classList.add('no-scroll')

    return body.classList.remove('no-scroll');
  }, [body.classList, stateMenu]);

  // component did update theme
  useEffect(() => {
    let themeStorage = localStorage.getItem('theme');

    if (themeStorage) {
      root.setAttribute('id', themeStorage);
      setTheme(themeStorage);
      return;
    }

    root.setAttribute('id', theme);
  }, [root, theme]);

  return (
    <AppContext.Provider value={{
      loggedIn,
      theme,
      stateMenu,
      isLoading,
      savedMovies,
      setIsLoading,
      isLoadingTimer,
      handleSavedMovies,
      disableComponents: setDisableComponents,
      onAddSavedMovie: handleAddSavedMovie,
      onDeletSavedMovie: handleDeleteSavedMovie,
    }}>
      <CurrentUserContext.Provider value={currentUser}>

        <div className="app">
          <Overlay />
          <Toastify />

          <Header
            headerDisable={disableComponents.header}
            onBurgerClose={handleBurgerClose}
            onClickBurger={handleClickBurger}
            currentPath={currentPath}
          />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/signup">
              <Register
                onRegister={handleRegister}
              />
            </Route>
            <Route path="/signin">
              <Login
                onLogin={handleLogin}
              />
            </Route>
            <Route exact path="/movies">
              <ProtectedRoute
                component={Movies}
                handleMovies={handleMovies}
              />
            </Route>
            <Route exact path="/saved-movies">
              <ProtectedRoute
                component={SavedMovies}
              />
            </Route>
            <Route exact path="/profile">
              <ProtectedRoute
                component={Profile}
                onUpdateUser={handleUpdateUser}
                logout={handleLogout}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          <Footer footerDisable={disableComponents.footer} handleThemeChenge={handleThemeChenge} />
        </div>

      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
