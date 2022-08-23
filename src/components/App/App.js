import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import AuthorizedRoute from '../AuthorizedRoute/AuthorizedRoute';
import UnauthoziedRoute from '../UnauthoziedRoute/UnauthoziedRoute';

// Context
import { CurrentUserContext } from '../../Contexts/CurrentUserContext';
import { LoggedInContext } from '../../Contexts/LoggedInContext'
import { ThemeContext } from '../../Contexts/ThemeContexts';
import { StateMenuContext } from '../../Contexts/StateMenuContext';
import { DisableComponentsContext } from '../../Contexts/DisableComponentsContext';

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

// App
function App() {
  const root = document.documentElement;
  const body = document.querySelector('body');
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  // use state
  const [theme, setTheme] = useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const [disableComponents, setDisableComponents] = useState({ header: false, footer: false });
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  // handle register
  function handleRegister(name, email, password) {
    return MainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        renderToastify('error', err.message)
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // handle login
  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        renderToastify('success', `${res.name} приятного просмотра!`);
        checkAuth();
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // handle logout
  function handleLogout() {
    MainApi.logout()
      .then((res) => {
        setLoggedIn(false);
        history.push('/');
        renderToastify('success', `${res.message}`);
      })
      .catch((err) => {
        renderToastify('error', err.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  // check token
  function checkAuth() {
    MainApi.getUserInfo()
      .then(({name, email, _id}) => {
        setCurrentUser({name, email, _id})
        setLoggedIn(true);
        history.push(currentPath);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  // component did mount
  useEffect(() => {
    checkAuth();
  }, []);

  // component did update no-scroll
  useEffect(() => {
    if(stateMenu) {
      return body.classList.add('no-scroll');
    }

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
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <DisableComponentsContext.Provider value={setDisableComponents}>
          <ThemeContext.Provider value={theme}>
            <StateMenuContext.Provider value={stateMenu}>

            <div className="app">
              <Overlay />
              <Toastify />

              <Header
                headerDisable={disableComponents.header}
                onBurgerClose={handleBurgerClose}
                onClickBurger={handleClickBurger} />

              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/signup">
                  <UnauthoziedRoute
                    onRegister={handleRegister}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    component={Register}
                  />
                </Route>
                <Route path="/signin">
                  <UnauthoziedRoute
                    onLogin={handleLogin}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    component={Login}
                  />
                </Route>
                <Route path="/movies">
                  <AuthorizedRoute component={Movies} />
                </Route>
                <Route path="/saved-movies">
                  <AuthorizedRoute component={SavedMovies} />
                </Route>
                <Route path="/profile">
                  <AuthorizedRoute
                    component={Profile}
                    logout={handleLogout}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>

              <Footer footerDisable={disableComponents.footer} handleThemeChenge={handleThemeChenge} />
            </div>

            </StateMenuContext.Provider>
          </ThemeContext.Provider>
        </DisableComponentsContext.Provider>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
