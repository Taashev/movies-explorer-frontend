import promoImg from '../../../images/main/promo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container container">
        <div className="promo__block">
          <img className="promo__bg-img" src={promoImg} alt="Промо логотип" />
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
      </div>
    </section>
  )
}

export default Promo;
