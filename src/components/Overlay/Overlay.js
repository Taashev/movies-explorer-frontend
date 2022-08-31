import { useContext } from 'react';
import { AppContext } from '../../Contexts/AppContext';

function Overlay() {
  const {stateMenu} = useContext(AppContext);
  const overlayVisible = stateMenu ? 'overlay_visible' : '';

  return (
    <div className={`overlay ${overlayVisible}`}></div>
  )
}

export default Overlay;
