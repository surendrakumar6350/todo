import { httpAxios } from "@/helper/httpAxios";
export const followkr = async (data)=> {
    const result = await httpAxios.post("api/followapi/follow", data);
    return result.data;
}