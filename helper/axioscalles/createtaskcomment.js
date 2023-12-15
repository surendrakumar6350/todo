import { httpAxios } from "../httpAxios";

export const createcomments = async (obj)=> {
    const result = await httpAxios.post("/api/comment/createcomment", obj);
    return result.data
}