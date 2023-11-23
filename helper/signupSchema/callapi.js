import { httpAxios } from "../httpAxios";
export const makeuser = async (data)=> {
    const result = await httpAxios.post("api/signup", data);
    return result;
}