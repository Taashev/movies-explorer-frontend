import { Link } from "react-router-dom";

function NavGuest() {
 return (
  <div className="nav-guest">
    <Link className="nav-guest__link hover" to="/signup">
      Регистрация
    </Link>
    <Link className="nav-guest__link nav-guest__link_login hover" to="/signin">
      Войти
    </Link>
  </div>
 );
};

export default NavGuest;
