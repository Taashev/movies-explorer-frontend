import { useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleWindowWidth() {
    setWindowWidth(window.innerWidth);
  };

  function handleAddEventListenerResize() {
    window.addEventListener('resize', handleWindowWidth)
  };

  function handleRemoveEventListenerResize() {
    window.removeEventListener('resize', handleWindowWidth)
  };

  return {
    handleAddEventListenerResize,
    handleRemoveEventListenerResize,
    windowWidth,
  };
};

export default useWindowWidth;
