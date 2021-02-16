const client = require('./client');
const { getUserAccessToken } = require('../authorization/authService');

// BASE
const BASE_URL = 'https://localhost:44355/api';

// BOARDS
const GET_BOARDS = `${BASE_URL}/boards`;
const GET_BOARD = `${BASE_URL}/boards/{boardId}`;

const createThulloConfig = async () => {
  const token = await getUserAccessToken();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  return config;
}

export async function getBoards() {
  const config = await createThulloConfig();
  return await client.get(GET_BOARDS, {}, config);
}

export async function getBoard(boardId) {
  const config = await createThulloConfig();
  client.get(GET_BOARD, { boardId }, config);
}
