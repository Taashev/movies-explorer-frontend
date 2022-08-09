function Portfolio() {
  return (
    <aside className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link link hover" href="https://github.com/Taashev/how-to-learn" target="blank">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link link hover" href="https://github.com/Taashev/russian-travel" target="blank">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link link hover" href="https://github.com/Taashev/react-mesto-auth" target="blank">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Portfolio;
