import { httpAxios } from "../httpAxios";
export const likefinder = async (data)=> {
    const result = await httpAxios.post("api/likendislike/findlikeornot", data);
    return result.data;
}