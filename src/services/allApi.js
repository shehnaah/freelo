import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonApi";

// register api
export const registerApi = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/register`, user, "")
}

// login api
export const loginApi = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/login`, user, "")
}

// addprofile api
export const addProfileApi = async (profile, header) => {
    return await commonAPI("POST", `${BASE_URL}/profile/add`, profile, header)
}

// getallprofiles
export const getAllProfilesApi = async () => {
    return await commonAPI("GET", `${BASE_URL}/allprofiles`, "", )
}

export const updateProfileAPI = async (user, reqHeader) => {
    return await commonAPI("PUT", `${BASE_URL}/user/update`, user, reqHeader)

}

// getallprofiles
// export const getAllProfilesApi = async () => {
//     return await commonAPI('GET', `${BASE_URL}/allprofiles`, '');
//   };

