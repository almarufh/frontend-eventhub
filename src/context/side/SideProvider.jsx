import { useState } from 'react';
import sideContext from './sideContext';

function SideProvider({ children }) {
  const [side, setSide] = useState(false);

  const togleSide = () => {
    setSide((currentside) => {
      if (currentside) return false;
      return true;
    });
  };

  return (
    <sideContext.Provider value={{ side, togleSide }}>
      {children}
    </sideContext.Provider>
  );
}

export default SideProvider;
