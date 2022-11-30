import fetchAPI from "../config/api";

export const sendEmailService = async (data) => {
    const url = `${ROOT_API_PAYLENS}/users/email`;
    const response = await fetchAPI({ url, method: "POST", data });
    return response;
};