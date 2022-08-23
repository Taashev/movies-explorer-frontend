import Preloader from "../Preloader/Preloader";

function HandlerPreloader({text='', children, component: Component, width, height, isLoading, ...props}) {
  return isLoading
    ? <Preloader width={width} height={height} />
    : text || children || <Component {...props} />
}

export default HandlerPreloader;
