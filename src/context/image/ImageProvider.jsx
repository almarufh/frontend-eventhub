import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import modalContext from './imageContext';

function ImageProvider({ children }) {
  const image = useSelector((state) => state.auth.user?.image);
  const [previewPhoto, setPreviewPhoto] = useState(image || '');

  useEffect(() => {
    setPreviewPhoto(image || '');
  }, [image]);

  return (
    <modalContext.Provider value={{ previewPhoto, setPreviewPhoto }}>
      {children}
    </modalContext.Provider>
  );
}

export default ImageProvider;
