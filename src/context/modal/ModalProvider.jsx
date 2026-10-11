import { useState } from 'react';
import modalContext from './modalContext';

function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  const togleModal = () => {
    setModal((currentModal) => {
      if (currentModal) return false;
      return true;
    });
  };
  return (
    <modalContext.Provider value={{ modal, togleModal }}>
      {children}
    </modalContext.Provider>
  );
}

export default ModalProvider;
