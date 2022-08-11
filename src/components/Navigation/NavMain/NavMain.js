import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateMenuContext } from "../../../Contexts/StateMenuContext";
import IconsSvg from "../../IconsSvg/IconsSvg";

function NavMain() {
  const stateMenu = useContext(StateMenuContext);
  const menuOpen = stateMenu ? "nav-main_open" : '';

  return (
    <div className={`nav-main ${menuOpen}`}>
      <ul className="nav-main__list">
        <li className="nav-main__item nav-main__item_invisible">
          <NavLink className="nav-main__link hover" exact to="/" activeClassName="link-active" aria-label="На главную">Главная</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink className="nav-main__link hover" to="/movies" activeClassName="link-active" aria-label="Фильмы">Фильмы</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink className="nav-main__link hover" to="/saved-movies" activeClassName="link-active" aria-label="Сохранённые фильмы">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <div className="nav-main__profile">
        <NavLink className="nav-main__link hover" activeClassName="link-active" to="/profile" aria-label="Аккаунт">
          Аккаунт
        </NavLink>
        <NavLink className="nav-main__link hover" to="/profile">
          <IconsSvg id="profile-svg" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavMain;
