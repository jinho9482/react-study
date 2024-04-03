import { api } from "../config/network";

export const getAllBoards = async () => {
  const res = await api("/api/boards", "get");
  return res;
};

export const postBoards = async (data) => {
  const res = await api("/api/boards", "post", data);
  return res;
};
