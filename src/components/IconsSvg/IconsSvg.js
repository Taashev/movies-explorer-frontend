function IconsSvg({ id='', className='', ...props }) {
  switch (id) {
    case 'logo-svg':
      return (
        <svg className={`logo-svg ${className}`} id={id} {...props} viewBox="0 0 14 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.8072 12.3303C3.491 12.3303 4.2108 12.6239 5.00257 13.2477C5.97429 14.0183 6.62211 14.3853 6.98201 14.3853C7.52185 14.3853 7.77378 14.0917 7.77378 13.5413C7.77378 13.2477 7.62982 12.9908 7.30591 12.7706C7.12596 12.6606 6.22622 12.2936 4.53471 11.7064C1.79949 10.7156 0.431881 8.91743 0.431881 6.23853C0.431881 4.22018 1.15167 2.6422 2.59126 1.50459C3.88689 0.513761 5.43445 0 7.30591 0C8.92545 0 10.329 0.40367 11.5167 1.17431C12.7044 1.94495 13.3162 2.97248 13.3162 4.22018C13.3162 4.95413 13.1003 5.57798 12.6324 6.09174C12.1645 6.6055 11.5887 6.82569 10.8689 6.82569C10.1131 6.82569 9.28535 6.45872 8.34962 5.72477C7.77378 5.2844 7.3419 5.02752 7.05399 5.02752C6.55013 5.02752 6.2982 5.2844 6.2982 5.76147C6.2982 6.23853 6.91003 6.6789 8.16967 7.04587C9.89717 7.59633 11.1928 8.25688 12.1285 9.06422C13.3882 10.1284 14 11.5963 14 13.5046C14 15.5963 13.3162 17.211 11.9126 18.3853C10.617 19.4862 8.92545 20 6.83804 20C4.75064 20 3.02314 19.4495 1.65553 18.3119C0.575837 17.3945 0 16.367 0 15.156C0 14.3486 0.251932 13.6881 0.791778 13.1376C1.36761 12.6239 2.01542 12.3303 2.8072 12.3303Z" />
        </svg>
      )

    case 'profile-svg':
      return (
        <svg className={`profile-svg ${className}`} id={id} {...props} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect className="profile-svg__bg" fill="currentColor" rx="6" />
          <path fillRule="evenodd" clipRule="evenodd" d="M16.4303 16.9675C17.7917 16.4052 18.7498 15.0645 18.7498 13.5C18.7498 11.4289 17.0708 9.75 14.9998 9.75C12.9287 9.75 11.2498 11.4289 11.2498 13.5C11.2498 15.0645 12.2078 16.4052 13.5693 16.9675C12.175 17.1998 10.8924 17.7657 9.80835 18.5802L11.1899 20.419C12.2512 19.6217 13.5687 19.1496 14.9999 19.1496C16.431 19.1496 17.7485 19.6217 18.8098 20.419L20.1914 18.5802C19.1073 17.7657 17.8246 17.1997 16.4303 16.9675Z" />
        </svg>
      )

    case 'arrow-svg':
      return (
        <svg className={`arrow-svg ${className}`} id={id} {...props} viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z" />
        </svg>
      )

    case 'heart-svg':
      return (
        <svg className={`heart-svg ${className}`} id={id} {...props} viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.65242 1.89789L7.01419 2.24773L7.36168 1.8837C8.08219 1.12888 8.97817 0.5 10.1818 0.5C12.1019 0.5 13.5 2.02862 13.5 4C13.5 4.9368 13.0747 5.73587 12.3847 6.40496L7 11.3228L1.60992 6.40004L1.59988 6.39087L1.58936 6.38227C0.885614 5.80642 0.5 4.96765 0.5 4C0.5 2.02862 1.89813 0.5 3.81818 0.5C5.01333 0.5 5.90847 1.17846 6.65242 1.89789Z" />
        </svg>
      )

    case 'cross-svg':
      return (
        <svg className="cross-svg" id={id} viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.06029 3.8822L7.29955 1.64294L6.23889 0.582275L3.99962 2.82154L1.76048 0.582391L0.699821 1.64305L2.93896 3.8822L0.582031 6.23913L1.64269 7.29979L3.99963 4.94286L6.35667 7.29991L7.41734 6.23925L5.06029 3.8822Z" />
        </svg>
      )

      case 'eye-show-svg':
        return (
          <svg className="eye-show-svg" id={id} viewBox="0 0 32 32" fill="currentColor" enableBackground="new 0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="currentColor" />
            <circle cx="16" cy="16" fill="currentColor" r="5" />
          </svg>
        )

      case 'eye-disable-svg':
        return (
          <svg className="eye-disable-svg" id={id} viewBox="0 0 32 32" enableBackground="new 0 0 32 32" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="currentColor" />
            <circle cx="16" cy="16" fill="currentColor" r="5" />
            <line fill="currentColor" x1="3" x2="29" y1="3" y2="29"/>
          </svg>
        )

    default: break;
  };
};

export default IconsSvg;
