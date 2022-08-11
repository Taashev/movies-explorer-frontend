import Theme from '../Theme/Theme';

function Footer({ footerDisable, handleThemeChenge }) {
  return (
    <footer className={`footer ${footerDisable ? 'footer_disable' : ''}`}>
      <div className="footer__container container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__cop">&copy; 2022</p>
          <Theme handleThemeChenge={handleThemeChenge} />
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link hover" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a className="footer__link link hover" href="https://github.com/Taashev/movies-explorer-frontend" target="blank">Github</a>
            </li>
            <li className="footer__item">
              <a className="footer__link link hover" href="https://vk.com/bear_hacki" target="blank">ВКонтакте</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
