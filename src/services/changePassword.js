import fetchAPI from "../config/api";

export const changePasswordService = async (data, userId) => {
    const url = `${ROOT_API_PAYLENS}/users/change-password/${userId}`;
    const response = await fetchAPI({ url, method: "PUT", data });
    return response;
};