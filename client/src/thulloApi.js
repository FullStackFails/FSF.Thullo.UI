const client = require('./client');

// BASE
const BASE_URL = 'https://localhost:44355/api';

// BOARDS
const GET_BOARDS = `${BASE_URL}/boards`;
const GET_BOARD = `${BASE_URL}/boards/{boardId}`;

export function getBoards() {
  return client.get(GET_BOARDS);
}

export function getBoard(boardId) {
  client.get(GET_BOARD, { boardId });
}
