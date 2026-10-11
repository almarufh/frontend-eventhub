import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import ImageProvider from './context/image/ImageProvider.jsx';
import ModalProvider from './context/modal/ModalProvider';
import SideProvider from './context/side/SideProvider';
import store from './redux/store.js';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ImageProvider>
        <ModalProvider>
          <SideProvider>
            <App />
          </SideProvider>
        </ModalProvider>
      </ImageProvider>
    </Provider>
  </StrictMode>
);
