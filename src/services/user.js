import fetchAPI, {getHeaders} from "../config/api/fetchAPI";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;

export const getUsersService = async () => {
  const url = `${ROOT_API_PAYLENS}/users`;
  const response = await fetchAPI({ url, method: "GET" });
  return response;
};

export const getDetailUserService = async (detailUserId) => {
  const url = `${ROOT_API_PAYLENS}/users/${detailUserId}`;
  const headers = getHeaders();
  const response = await fetchAPI({ 
      url, 
      method: "GET",
      headers
  });
  return response;
};

export const phoneNumberService = async (data, detailUserId) => {
  const url = `${ROOT_API_PAYLENS}/users/phone-number/${detailUserId}`;
  const headers = getHeaders();
  const response = await fetchAPI({ 
      url, 
      method: "POST", 
      data, 
      headers
  });
  return response;
};

export const deletePhoneNumberService = async (detailUserId) => {
  const url = `${ROOT_API_PAYLENS}/users/phone-number/delete/${detailUserId}`;
  const headers = getHeaders();
  const response = await fetchAPI({ 
      url, 
      method: "DELETE", 
      headers
  });
  return response;
};
