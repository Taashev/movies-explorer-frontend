import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeContext } from '../../Contexts/ThemeContexts';
import 'react-toastify/dist/ReactToastify.css';

function renderToastify(type, message) {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

function Toastify() {
  const theme = useContext(ThemeContext);

  return <ToastContainer theme={theme} newestOnTop={false} />
};

export { Toastify, renderToastify };
