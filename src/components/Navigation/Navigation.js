import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateMenuContext } from "../../Contexts/StateMenuContext";
import IconsSvg from "../IconsSvg/IconsSvg";

function Navigation({onBurgerClose}) {
  const stateMenu = useContext(StateMenuContext);
  const menuOpen = stateMenu ? "nav_open" : '';

  function handleClickLink(e) {
    if (e.currentTarget.className.includes('link-active')) {
      return;
    }

    onBurgerClose();
  }

  return (
    <nav className={`nav ${menuOpen}`}>
      <ul className="nav__list">
        <li className="nav__item nav__item_invisible">
          <NavLink className="nav__link hover" exact to="/" activeClassName="link-active" aria-label="На главную" onClick={handleClickLink}>Главная</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link hover" to="/movies" activeClassName="link-active" aria-label="Фильмы" onClick={handleClickLink}>Фильмы</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link hover" to="/saved-movies" activeClassName="link-active" aria-label="Сохранённые фильмы" onClick={handleClickLink}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <NavLink className="nav__profile nav__link hover" activeClassName="link-active" to="/profile" aria-label="Аккаунт" onClick={handleClickLink}>
          Аккаунт
          <IconsSvg id="profile-svg" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
