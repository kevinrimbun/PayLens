import axios from "axios";

const fetchAPI = async ({ url, method, data,  headers }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
    headers
  }).catch((err) => err.response);

  return responseAxios;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const getHeaders = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers;
};

export default fetchAPI;