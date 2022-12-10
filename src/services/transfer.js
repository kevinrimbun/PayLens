import fetchAPI from "../config/api/fetchAPI";

//crud
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const transferService = async (data,userId) => {
    const url = `${ROOT_API_PAYLENS}/transfer/${userId}`;
    const response = await fetchAPI({url, method:'POST' , data});
    return response;
}