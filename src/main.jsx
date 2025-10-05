import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DiaryProvider } from './context/DiaryContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiaryProvider>
      <App />
    </DiaryProvider>
  </StrictMode>
);
