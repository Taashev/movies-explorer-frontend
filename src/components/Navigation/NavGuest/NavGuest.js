import { NavLink } from "react-router-dom";

function NavGuest() {
 return (
  <div className="nav-guest">
    <NavLink className="nav-guest__register link hover" activeClassName="link-active" to="/signup">
      Регистрация
    </NavLink>
    <NavLink className="nav-guest__login link hover" activeClassName="nav-guest__login_active" to="/signin">
      Войти
    </NavLink>
  </div>
 );
};

export default NavGuest;
