import { httpAxios } from "@/helper/httpAxios";
export const foollowcheck = async (data)=> {
    const result = await httpAxios.post("api/followapi/checkfollowornot", data);
    return result.data;
}