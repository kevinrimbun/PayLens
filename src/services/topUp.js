<<<<<<< HEAD
import fetchAPI from "../config/api";
=======
import fetchAPI from "../config/api/fetchAPI";
>>>>>>> 2ac6971433e748b553ca994b13a7ac9e6c955a49

//crud
const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const topUpService = async (data,userId) => {
    const url = `${ROOT_API_PAYLENS}/top_up/${userId}`;
    const response = await fetchAPI({url, method:'POST' , data});
    return response;
}