function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__container container">
        <ul className="nav-tab__list">
          <li className="nav-tab__item">
            <a className="nav-tab__link link hover" href="#about-project">О проекте</a>
          </li>
          <li className="nav-tab__item">
            <a className="nav-tab__link link hover" href="#techs">Технологии</a>
          </li>
          <li className="nav-tab__item">
            <a className="nav-tab__link link hover" href="#about-me">Студент</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavTab;
