function Button({children, className='', type, mods=''}) {
  const buttonMod = mods.split(' ').map((mod) => `button_${mod}`).join(' ');

  return (
    <button
      className={`button ${className} ${mods ? buttonMod : ''}`}
      type={type}>
        {children}
    </button>
  )
};

export default Button;
