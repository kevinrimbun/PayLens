import fetchAPI from "../Config/api";

// Services for history controller
const ROOT_API_PAYLENS = process.env.REACT_APP_API_PAYLENS;

// Get All history data
export const getHistoryService = async () => {
  const url = `${ROOT_API_PAYLENS}/history`;
  const response = await fetchAPI({ url, method: "GET" });
  return response;
};

// // Create book
// export const createBookService = async (data) => {
//   const url = `${ROOT_API_LIBRARY}/books`;
//   const response = await fetchAPI({ url, method: "POST", data });
//   return response;
// };