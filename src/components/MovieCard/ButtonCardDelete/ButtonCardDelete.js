import IconsSvg from "../../IconsSvg/IconsSvg";

function ButtonCardDelete({onDeleteCard}) {
  function handleButtonClick(e) {
    onDeleteCard();
  };

  return (
    <button className="button-card-delete" onClick={handleButtonClick}>
      <IconsSvg id="cross-svg" />
    </button>
  );
};

export default ButtonCardDelete;
