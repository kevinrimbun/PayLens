import fetchAPI from "../config/api";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const forgotPasswordService = async (data, userId) => {
    const url = `${ROOT_API_PAYLENS}/users/forgot-password/${userId}`;
    const response = await fetchAPI({ url, method: "PUT", data });
    return response;
};