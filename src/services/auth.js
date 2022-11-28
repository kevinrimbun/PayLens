import fetchAPI from "../config/api";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;

export const registerService = async (data) => {
    const url = `${ROOT_API_PAYLENS}/users/register`;
    const response = await fetchAPI({ url, method: "POST", data });
    return response;
};

export const createPinService = async (data, detailUserId) => {
    const url = `${ROOT_API_PAYLENS}/users/register/${detailUserId}`;
    const response = await fetchAPI({ url, method: "POST", data });
    return response;
};

export const loginService = async (data) => {
    const url = `${ROOT_API_PAYLENS}/users/login`;
    const response = await fetchAPI({ url, method: "POST", data });
    return response;
};