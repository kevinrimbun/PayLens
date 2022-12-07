import fetchAPI from "../config/API";

const ROOT_API_PAYLENS = process.env.REACT_APP_API_PAYLENS;

export const getUsersService = async () => {
  const url = `${ROOT_API_PAYLENS}/users`;
  const response = await fetchAPI({ url, method: "GET" });
  return response;
};