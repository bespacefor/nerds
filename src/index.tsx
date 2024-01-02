import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'App';

import './index.css';

//import { setupStore } from './store';
//const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
