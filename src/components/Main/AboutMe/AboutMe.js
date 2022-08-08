import Title from "../Title/Title";
import myPhoto from "../../../images/main/my-photo.jpg";
import myPhotoMobile from "../../../images/main/my-photo-mobile.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container container">
        <Title>Студент</Title>
        <article className="about-me__card">
          <div className="about-me__data">
            <div className="about-me__meta">
              <h3 className="about-me__name">Арсений</h3>
              <p className="about-me__title">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__description">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <address className="about-me__contacts">
              <a className="about-me__link link hover" href="https://vk.com/bear_hacki" target="blank">ВКонтакте</a>
              <a className="about-me__link link hover" href="https://github.com/Taashev" target="blank">Github</a>
            </address>
          </div>
          <picture>
            <source srcset={myPhotoMobile} media="(max-width: 600px)" />
            <img className="about-me__photo" src={myPhoto} alt="фото студента" />
          </picture>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
