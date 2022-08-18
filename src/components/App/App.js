import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// Context
import { CurrentUserContext } from '../../Contexts/CurrentUserContext';
import { LoggedInContext } from '../../Contexts/LoggedInContext'
import { ThemeContext } from '../../Contexts/ThemeContexts';
import { StateMenuContext } from '../../Contexts/StateMenuContext';
import { DisableComponentsContext } from '../../Contexts/DisableComponentsContext';
import { ConfigNotificationContext } from '../../Contexts/ConfigNotificationContext';

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
import Notification from '../Notification/Notification';
import Preloader from '../Preloader/Preloader';

// App
function App() {
  const root = document.documentElement;
  const body = document.querySelector('body');
  const [theme, setTheme] = useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const [disableComponents, setDisableComponents] = useState({ header: false, footer: false });
  const [configNotification, setConfigNotification] = useState({
    isOpen: false,
    type: '',
    title: '',
    titleColor: '',
    message: '',
    messageColor: ''
  });

  function handleClickBurger() {
    setStateMenu(!stateMenu);
  };

  function handleThemeChenge(theme) {
    setTheme(theme.target.value);
  };

  function closeAllPopup() {
    setConfigNotification({
      isOpen: false,
      type: '',
      title: '',
      titleColor: '',
      message: '',
      messageColor: ''
    });
  };

  useEffect(() => {
    root.setAttribute('id', theme);

    if(stateMenu) {
      body.classList.add('no-scroll');
    }

    return () => {
      body.classList.remove('no-scroll');
    }
  }, [loggedIn, theme, stateMenu]);

  return (
		<ConfigNotificationContext.Provider value={setConfigNotification}>
		  <LoggedInContext.Provider value={loggedIn}>
  		  <DisableComponentsContext.Provider value={setDisableComponents}>
  		    <ThemeContext.Provider value={theme}>
            <StateMenuContext.Provider value={stateMenu}>

      		  <div className="app">
              <Overlay />
              <Notification config={configNotification} onClose={closeAllPopup} />

              <Header
                headerDisable={disableComponents.header}
                onClickBurger={handleClickBurger} />

              <Switch>
                <Route path="/signup">
                  <Register />
                </Route>
                <Route path="/signin">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/movies">
                  <ProtectedRoute component={Movies} />
                </Route>
                <Route exact path="/saved-movies">
                  <ProtectedRoute component={SavedMovies} />
                </Route>
                <Route exact path="/profile">
                  <ProtectedRoute component={Profile} />
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
		</ConfigNotificationContext.Provider>
  );
};

export default App;
