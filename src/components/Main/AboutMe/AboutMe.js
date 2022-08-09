import Title from "../Title/Title";
import MyCard from "../../MyCard/MyCard";
import Portfolio from "../../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container container">
        <Title>Студент</Title>
        <MyCard />
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
