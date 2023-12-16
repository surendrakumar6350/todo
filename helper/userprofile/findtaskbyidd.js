import { httpAxios } from "../httpAxios";
export const findbyidd = async (data)=> {
    const result = await httpAxios.post("api/findpostbyid", data);
    return result.data;
}