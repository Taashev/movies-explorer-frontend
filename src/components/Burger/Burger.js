import { useContext } from "react";
import { AppContext } from "../../Contexts/AppContext";

function Burger({ locationMain, handleClickBurger }) {
  const {stateMenu} = useContext(AppContext);
  const isOpen = stateMenu ? 'burger_active' : '';
  const burgetThemeMain = locationMain ? (isOpen ? '' : 'burger_theme_main') : '';

  return (
    <div className={`burger ${burgetThemeMain} ${isOpen}`} onClick={handleClickBurger}>
      <span className="burger__item"></span>
      <span className="burger__item"></span>
      <span className="burger__item"></span>
    </div>
  );
};

export default Burger;
