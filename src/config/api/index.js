import axios from "axios";

const fetchAPI = async ({url, method, data}) =>{
    const responseAxios = await axios({
        url,
        method,
        data
    }).catch((err) => err.response);
    return responseAxios;
}

export default fetchAPI;