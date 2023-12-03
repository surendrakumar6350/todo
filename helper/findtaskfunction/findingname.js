import { httpAxios } from "../httpAxios";

export const username = async ()=> {
    const result = await httpAxios.post("/api/username");
    return result.data
}