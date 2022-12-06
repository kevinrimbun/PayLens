import fetchAPI from "../Config/api";

//crud
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const topUpService = async (data,userId) => {
    const url = `${ROOT_API_PAYLENS}/top_up/${userId}`;
    const response = await fetchAPI({url, method:'POST' , data});
    return response;
}