import React from 'react'

const Preloader = ({width='', height='', background, ...props}) => {

  return (
    <div className="preloader">
      <div className="preloader__container" style={{width: width, height: height}}>
        <div className="preloader__item"><i></i></div>
        <div className="preloader__item"><i></i></div>
      </div>
    </div>
  )
};

export default Preloader
