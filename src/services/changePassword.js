import fetchAPI from "../Config/api";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS

export const changePasswordService = async (data, userId) => {
    const url = `${ROOT_API_PAYLENS}/users/change-password/${userId}`;
    const response = await fetchAPI({ url, method: "PUT", data });
    return response;
};