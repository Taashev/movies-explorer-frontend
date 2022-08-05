import { NavLink } from "react-router-dom";
import profileIco from '../../../images/ico/profile.svg';

function NavMain() {
  return (
    <div className="nav-main">
      <button className="nav-main__button hover"></button>
      <ul className="nav-main__list">
        <li className="nav-main__item nav-main__item_invisible">
          <NavLink exact to="/" className="nav-main__link link hover" activeClassName="link-active">Главная</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink to="/movies" className="nav-main__link link hover" activeClassName="link-active">Фильмы</NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink to="/saved-movies" className="nav-main__link link hover" activeClassName="link-active">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <div className="nav-main__profile">
        <NavLink className="nav-main__link link hover" activeClassName="link-active" to="/profile">
          Аккаунт
        </NavLink>
        <NavLink className="nav-main__link link hover" to="/profile">
          <img className="nav-main__profile-img" src={profileIco} alt="Профиль" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavMain;
