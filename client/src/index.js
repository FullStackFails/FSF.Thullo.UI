import React from 'react';
import ReactDOM from 'react-dom';
import { getBoards, getBoard } from './api/thulloApi';
import App from './App';

getBoards()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
