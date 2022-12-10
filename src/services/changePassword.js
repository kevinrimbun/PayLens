<<<<<<< HEAD
import fetchAPI from "../config/api";
=======
import fetchAPI from "../config/api/fetchAPI";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS
>>>>>>> 2ac6971433e748b553ca994b13a7ac9e6c955a49

export const changePasswordService = async (data, userId) => {
    const url = `${ROOT_API_PAYLENS}/users/change-password/${userId}`;
    const response = await fetchAPI({ url, method: "PUT", data });
    return response;
};