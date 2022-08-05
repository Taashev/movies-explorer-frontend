import NavGuest from './NavGuest/NavGuest';
import NavMain from './NavMain/NavMain';
import Burger from './Burger/Burger';

function Navigation({ loggedIn }) {
  return (
    <nav className="nav">
      {loggedIn && <Burger />}
      <div className="nav__overlay"></div>
      {loggedIn ? <NavMain /> : <NavGuest />}
    </nav>
  );
};

export default Navigation;
