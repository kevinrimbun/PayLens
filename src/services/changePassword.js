import fetchAPI, { getHeaders } from "../config/api";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const changePasswordService = async (data, userId) => {
    const url = `${ROOT_API_PAYLENS}/users/change-password/${userId}`;
    const headers = getHeaders();
    const response = await fetchAPI({ url, method: "PUT", data , headers });
    return response;
};