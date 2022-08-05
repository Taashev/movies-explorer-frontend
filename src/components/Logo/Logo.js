import LogoImage from "../../images/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={LogoImage} alt="Логотип" />
    </div>
  );
};

export default Logo;
