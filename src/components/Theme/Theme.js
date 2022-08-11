import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContexts";

function Theme({handleThemeChenge}) {
  const theme = useContext(ThemeContext);

  return (
    <div className="theme">
      <span className="theme__label">Тема:</span>
      <div className="theme__toggle">
        <label className="theme__item">
          <input className="theme__control" type="radio" name="color-theme" value="light" onChange={handleThemeChenge} checked={theme === 'light' ? true : false} />
          <span className="theme__text">Светлая</span>
        </label>
        <label className="theme__item">
          <input className="theme__control" type="radio" name="color-theme" value="dark" onChange={handleThemeChenge} checked={theme === 'dark' ? true : false} />
          <span className="theme__text">Тёмная</span>
        </label>
      </div>
    </div>
  )
}

export default Theme;
