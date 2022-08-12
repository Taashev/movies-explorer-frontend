import { useContext } from 'react';
import { LoggedInContext } from '../../Contexts/LoggedInContext';
import NavGuest from './NavGuest/NavGuest';
import NavMain from './NavMain/NavMain';

function Navigation() {
  const loggedIn = useContext(LoggedInContext);

  return (
    <nav className="nav">
      {loggedIn ? <NavMain /> : <NavGuest />}
    </nav>
  );
};

export default Navigation;
