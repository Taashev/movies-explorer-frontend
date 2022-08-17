import { useContext } from "react";
import { StateMenuContext } from "../../Contexts/StateMenuContext";

function Burger({ locationMain, handleClickBurger }) {
  const stateMenu = useContext(StateMenuContext);
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
