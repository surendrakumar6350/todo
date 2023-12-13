import { httpAxios } from "../httpAxios";
export const likerr = async (data)=> {
    const result = await httpAxios.post("api/likendislike/like", data);
    return result.data;
}

export const dislikerr = async (data)=> {
    const result = await httpAxios.post("api/likendislike/dislike", data);
    return result.data;
}