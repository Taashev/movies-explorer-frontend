import { useContext } from 'react';
import { StateMenuContext } from '../../Contexts/StateMenuContext';

function Overlay() {
  const stateMenu = useContext(StateMenuContext);
  const overlayVisible = stateMenu ? 'overlay_visible' : '';

  return (
    <div className={`overlay ${overlayVisible}`}></div>
  )
}

export default Overlay;
