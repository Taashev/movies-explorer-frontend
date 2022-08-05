function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__cop">&copy; 2022</p>
          <ul className="footer__list">
            <li className="footer__item hover">
              <a href="#" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__item hover">
              <a href="#" className="footer__link">Github</a>
            </li>
            <li className="footer__item hover">
              <a href="#" className="footer__link">ВКонтакте</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
