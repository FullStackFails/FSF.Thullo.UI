import React from 'react';
import ReactDOM from 'react-dom';
import { getBoards, getBoard } from './thulloApi';

getBoards()

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello</h1>
    <h1>Hello</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
