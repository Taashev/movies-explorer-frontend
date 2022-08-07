import { NavLink } from "react-router-dom";
import profileIco from '../../../images/ico/profile.svg';

function NavMain() {
  return (
    <div className="nav-main">
      <button className="nav-main__button hover"></button>
      <ul className="nav-main__list">
        <li className="nav-main__item nav-main__item_invisible">
          <NavLink className="nav-main__link link hover" exact to="/" activeClassName="link-active" aria-label="На главную">Главная</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink className="nav-main__link link hover" to="/movies" activeClassName="link-active" aria-label="Фильмы">Фильмы</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink className="nav-main__link link hover" to="/saved-movies" activeClassName="link-active" aria-label="Сохранённые фильмы">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <div className="nav-main__profile">
        <NavLink className="nav-main__link link hover" activeClassName="link-active" to="/profile" aria-label="Аккаунт">
          Аккаунт
        </NavLink>
        <NavLink className="nav-main__link link hover" to="/profile">
          <img className="nav-main__profile-img" src={profileIco} alt="Аккаунт" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavMain;
