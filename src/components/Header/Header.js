import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Contexts/AppContext';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import NavGuest from '../NavGuest/NavGuest';

function Header({ headerDisable, currentPath, onBurgerClose, onClickBurger }) {
  const {loggedIn} = useContext(AppContext);
  const locationMain = currentPath === '/';
  const headerThemePageMain = locationMain ? 'header_theme_page-main' : '';

  return (
    <header className={`header ${headerThemePageMain} ${headerDisable ? 'header_disable' : ''}`}>
      <div className="header__container container">
        { <Link className="hover" to="/" aria-label="На главную"><Logo /></Link> }
        {loggedIn ? <Navigation onBurgerClose={onBurgerClose} /> : <NavGuest />}
        {loggedIn && <Burger locationMain={locationMain} handleClickBurger={onClickBurger} />}
      </div>
    </header>
  );
};

export default Header;
