import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

function Header({ loggedIn, location, headerDisable, onClickBurger }) {
  const locationMain = location === '/';
  const headerThemePageMain = locationMain ? 'header_theme_page-main' : '';
  const getActiveLogoLink = !locationMain
    ? <Link className="hover" to="/" aria-label="На главную"><Logo /></Link>
    : <Logo />

  return (
    <header className={`header ${headerThemePageMain} ${headerDisable ? 'header_disable' : ''}`}>
      <div className="header__container container">
        { getActiveLogoLink }
        <Navigation loggedIn={loggedIn} />
        {loggedIn && <Burger locationMain={locationMain} handleClickBurger={onClickBurger} />}
      </div>
    </header>
  );
};

export default Header;
