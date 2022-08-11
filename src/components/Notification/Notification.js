function Notification({children, config, onClose}) {
  const {isOpen, status, titleColor, title, text, textColor} = config;

  return (
    <div className={`notification ${isOpen ? 'notification_active' : ''}`}>
      <div className="notification__header">
        <span className={`notification__status ${status ? `notification__status_${status}` : ''}`}></span>
        <button className="notification__close hover" onClick={onClose}></button>
      </div>
      <h2 className={`notification__title ${titleColor ? `notification__title_${titleColor}` : ''}`}>{title}</h2>
      <p className={`notification__text ${textColor ? `notification__text_${textColor}` : ''}`}>{text}</p>
    </div>
  )
}

export default Notification;
