import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();
  const [locationMain, setLocationMain] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLocationMain(location.pathname === '/')
  }, [location]);

  return (
		<div className="app">
      <Header location={locationMain} loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
        {/* <Route path="/movies"></Route> */}
        {/* <Route path="/saved-movies"></Route> */}
        {/* <Route path="/profile"></Route> */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
		</div>
  );
};

export default App;
