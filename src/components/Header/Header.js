import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn, location}) {
  return (
    <header className={`header ${location && 'header_bg-main'}`}>
      <div className="header__container container">
        {
          !location
            ? <Link className="hover" to="/" aria-label="На главную">
                <Logo />
              </Link>
            : <Logo />
        }
        <Navigation location={location} loggedIn={loggedIn} />
      </div>
    </header>
  );
};

export default Header;
