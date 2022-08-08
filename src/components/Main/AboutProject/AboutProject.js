import Title from "../Title/Title";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container container">
        <Title>О проекте</Title>
        <div className="about-project__wrapper">
          <div className="about-project__note">
            <p className="about-project__note-title">Дипломный проект включал 5 этапов</p>
            <p className="about-project__note-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__note">
            <p className="about-project__note-title">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__note-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <ul className="about-project__deadline">
          <li className="about-prject__deadline-item">1 неделя</li>
          <li className="about-prject__deadline-item">4 недели</li>
        </ul>
      </div>
    </section>
  )
};

export default AboutProject;
