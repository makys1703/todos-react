import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';


const rootElement: HTMLElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
