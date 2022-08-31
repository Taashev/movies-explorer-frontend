import IconsSvg from "../../IconsSvg/IconsSvg";

function ButtonCardLike({onAddCard, onDeleteCard, isSaved}) {
  function handleButtonClick() {
    if (isSaved) return onDeleteCard();

    return onAddCard();
  };

  return (
    <button
      className={`button-card-like ${isSaved ? 'button-card-like_active' : ''}`}
      onClick={handleButtonClick}
    >
      <IconsSvg id="heart-svg" />
    </button>
  );
};

export default ButtonCardLike;
