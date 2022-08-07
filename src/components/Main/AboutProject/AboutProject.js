import Title from "../Title/Title";
import Article from "../Article/Article";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container container">
        <Title>О проекте</Title>
        <div className="about-project__wrapper">
          <Article>
            <h3 className="article__title">Дипломный проект включал 5 этапов</h3>
            <p className="article__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </Article>
          <Article>
            <h3 className="article__title">На выполнение диплома ушло 5 недель</h3>
            <p className="article__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </Article>
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
