import { httpAxios } from "@/helper/httpAxios";

export const findalllike = async (data)=> {
    const result = await httpAxios.post("api/likendislike/alllike", data);
    return result.data;
}