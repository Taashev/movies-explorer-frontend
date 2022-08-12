function Notification({config, onClose}) {
  const {isOpen, type, title, titleColor, message, messageColor} = config;

  return (
    <div className={`notification ${isOpen ? 'notification_active' : ''}`}>
      <div className="notification__header">
        <span className={`notification__type ${type ? `notification__type_${type}` : ''}`}></span>
        <button className="notification__close hover" onClick={onClose}></button>
      </div>
      <h2 className={`notification__title ${titleColor ? `notification__title_${titleColor}` : ''}`}>{title}</h2>
      <p className={`notification__message ${messageColor ? `notification__message_${messageColor}` : ''}`}>{message}</p>
    </div>
  )
}

export default Notification;
