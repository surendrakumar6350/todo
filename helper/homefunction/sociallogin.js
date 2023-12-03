import { httpAxios } from "../httpAxios";
export const sociallogin = async (user)=> {
    const result = await httpAxios.post("/api/socialmedia", user);
    return result
}