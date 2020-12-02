const client = require('./client');

// BASE
const BASE_URL = 'https://localhost:44355/api';

// BOARDS
const GET_BOARDS = `${BASE_URL}/boards`;
const GET_BOARD = `${BASE_URL}/boards/{boardId}`;
const CREATE_BOARD = `${BASE_URL}/boards`;

export function getBoards() {
  return client.get(GET_BOARDS);
}

export function getBoard(boardId) {
  return client.get(GET_BOARD, { boardId });
}

export function createBoard(board) {
  return client.post(CREATE_BOARD, board);
}
