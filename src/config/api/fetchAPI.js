import axios from "axios";

const fetchAPI = async ({ url, method, data, headers }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
    headers
  }).catch((err) => err.response);

  return responseAxios;
};

export default fetchAPI;