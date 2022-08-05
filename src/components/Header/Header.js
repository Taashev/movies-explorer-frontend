import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/"><Logo /></Link>
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  );
};

export default Header;
