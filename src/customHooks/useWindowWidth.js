import { useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleWindowWidth() {
    setWindowWidth(window.innerWidth);
  };

  function addEventListener() {
    window.addEventListener('resize', handleWindowWidth)
  };

  function removeEventListener() {
    window.removeEventListener('resize', handleWindowWidth)
  };

  return {
    addEventListener,
    removeEventListener,
    windowWidth,
  };
};

export default useWindowWidth;
