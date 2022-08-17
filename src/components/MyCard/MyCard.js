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
            Я живу в городе Санкт-Петербург. Детей и жены нет. Я очень люблю слушать музыку она меня вдохновляет. До «вчерашнего дня» имел свой небольшой бизнес аренды авто и работал в бизнес-класс такси. В планах было открыть свою кофейню, но после того как я попробовал веб-разработку все поменялось. С тех пор я начал кодить. В данный момент заканчиваю курсы Web-developer в Яндекс.Практикуме и настроен активно развиваться и искать работу в IT.
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
