import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../Contexts/LoggedInContext'
import { ThemeContext } from '../../Contexts/ThemeContexts';
import { StateMenuContext } from '../../Contexts/StateMenuContext';

import Overlay from '../Overlay/Overlay';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Notification from '../Notification/Notification';

function App() {
  const root = document.documentElement;
  const body = document.querySelector('body');
  const location = useLocation().pathname;
  const [theme, setTheme] = useState('dark');
  const [configNotification, setConfigNotification] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    titleColor: '',
    message: '',
    messageColor: ''
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const [headerDisable, setHeaderDisable] = useState(false);
  const [footerDisable, setFooterDisable] = useState(false);

  function handleClickBurger() {
    setStateMenu(!stateMenu);
  };

  function handleThemeChenge(theme) {
    setTheme(theme.target.value);
  };

  function closeAllPopup() {
    setConfigNotification({
      isOpen: false,
      status: '',
      title: '',
      titleColor: '',
      text: '',
      textColor: ''
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
  }, [theme, stateMenu]);

  return (
		<LoggedInContext.Provider value={loggedIn}>
		  <ThemeContext.Provider value={theme}>
        <StateMenuContext.Provider value={stateMenu}>

  		  <div className="app">
          <Overlay />
          <Notification config={configNotification} onClose={closeAllPopup} />

          <Header
            location={location}
            headerDisable={headerDisable}
            onClickBurger={handleClickBurger} />

          <Switch>
            <Route path="/signup">
              <Register setHeaderDisable={setHeaderDisable} setFooterDisable={setFooterDisable} />
            </Route>
            <Route path="/signin">
              <Login setHeaderDisable={setHeaderDisable} setFooterDisable={setFooterDisable} />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies"></Route>
            <Route path="/saved-movies"></Route>
            <Route path="/profile">
              <Profile setFooterDisable={setFooterDisable} />
            </Route>
            <Route path="*">
              <NotFound setHeaderDisable={setHeaderDisable} setFooterDisable={setFooterDisable} />
            </Route>
          </Switch>

          <Footer footerDisable={footerDisable} handleThemeChenge={handleThemeChenge} />
    		</div>

        </StateMenuContext.Provider>
  		</ThemeContext.Provider>
		</LoggedInContext.Provider>
  );
};

export default App;
