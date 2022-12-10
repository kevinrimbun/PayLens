import fetchAPI, { getHeaders } from "../config/api";

const ROOT_API_PAYLENS = process.env.REACT_APP_PAYLENS;

export const profilePictureService = async (data, fileId, userId) => {
    console.log(data)
    const url = `${ROOT_API_PAYLENS}/files/change-picture/${fileId}/${userId}`;
    const headers = getHeaders();
    // "multipart/form-data"
    const formData = new FormData();
    formData.append(
        "file",
        new File([data.image], data.image.name, { type: data.image.type })
    );
    const response = await fetchAPI({  
        url, 
        method: "PUT", 
        data: formData,
        headers
    });
    return response;
};

export const getProfilePicture = async (fileId) => {
    const url = `${ROOT_API_PAYLENS}/files/${fileId}`;
    const headers = getHeaders();

    const response = await fetchAPI ({
        url,
        method: "GET",
        headers
    });
    return response;
}