import NavGuest from './NavGuest/NavGuest';
import NavMain from './NavMain/NavMain';

function Navigation({ loggedIn }) {
  return (
    <nav className="nav">
      {loggedIn ? <NavMain /> : <NavGuest />}
    </nav>
  );
};

export default Navigation;
