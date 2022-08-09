import myPhoto from "../../images/main/my-photo.jpg";
import myPhotoMobile from "../../images/main/my-photo-mobile.jpg";

function MyCard() {
  return (
    <article className="my-card">
      <h3 className="my-card__title">Карточка студента</h3>
      <div className="my-card__data">
        <div className="my-card__meta">
          <p className="my-card__name">Арсений</p>
          <p className="my-card__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="my-card__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
        <address className="my-card__contacts">
          <a className="my-card__link link hover" href="https://vk.com/bear_hacki" target="blank">ВКонтакте</a>
          <a className="my-card__link link hover" href="https://github.com/Taashev" target="blank">Github</a>
        </address>
      </div>
      <picture>
        <source srcSet={myPhotoMobile} media="(max-width: 600px)" />
        <img className="my-card__photo" src={myPhoto} alt="фото студента" />
      </picture>
    </article>
  );
};

export default MyCard;
