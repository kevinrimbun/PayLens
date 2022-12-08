import fetchAPI, { getHeaders } from "../config/api/fetchAPI";

//crud
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const topUpService = async (data,userId) => {
    const url = `${ROOT_API_PAYLENS}/top_up/${userId}`;
    const headers = getHeaders();
    const response = await fetchAPI({url, method:'POST' , data, headers});
    return response;
}