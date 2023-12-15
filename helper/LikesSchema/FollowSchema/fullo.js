import { httpAxios } from "@/helper/httpAxios";
export const fullo = async (data)=> {
    const result = await httpAxios.post("api/followapi/allfollow", data);
    return result.data;
}