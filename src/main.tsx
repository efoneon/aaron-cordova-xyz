import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {loadedMessage} from './console-messages/message';
import App from './App';
import './index.css';

loadedMessage();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
