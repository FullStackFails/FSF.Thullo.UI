const client = require("./client");
const { getUserAccessToken } = require("../authorization/authService");

// BASE
const BASE_URL = "https://localhost:44355/api";

// BOARDS
const GET_BOARDS = `${BASE_URL}/boards`;
const GET_BOARD = `${BASE_URL}/boards/{boardId}`;
const ADD_BOARD = `${BASE_URL}/boards`;

const createThulloConfig = async () => {
  const token = await getUserAccessToken();

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return config;
};

export async function getBoards() {
  const config = await createThulloConfig();
  let response = await client.get(GET_BOARDS, {}, config);
  return response.data;
}

export async function getBoard(boardId) {
  const config = await createThulloConfig();
  let response = client.get(GET_BOARD, { boardId }, config);
  return response.data;
}

export async function addBoard(
  title,
  description,
  coverPhoto = "",
  isPrivate = false
) {
  const config = await createThulloConfig();
  let response = await client.post(
    ADD_BOARD,
    null,
    {
      title: title,
      description: description,
      coverPhoto: coverPhoto,
      isPrivate: isPrivate,
    },
    config
  );
  return response.data;
}
