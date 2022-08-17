import { useContext } from 'react';
import { LoggedInContext } from '../../Contexts/LoggedInContext';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import NavGuest from '../NavGuest/NavGuest';

function Header({ headerDisable, onClickBurger }) {
  const loggedIn = useContext(LoggedInContext);
  const location = useLocation().pathname;
  const locationMain = location === '/';
  const headerThemePageMain = locationMain ? 'header_theme_page-main' : '';

  return (
    <header className={`header ${headerThemePageMain} ${headerDisable ? 'header_disable' : ''}`}>
      <div className="header__container container">
        { <Link className="hover" to="/" aria-label="На главную"><Logo /></Link> }
        {loggedIn ? <Navigation onClickBurger={onClickBurger} /> : <NavGuest />}
        {loggedIn && <Burger locationMain={locationMain} handleClickBurger={onClickBurger} />}
      </div>
    </header>
  );
};

export default Header;
