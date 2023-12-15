import { httpAxios } from "@/helper/httpAxios";
export const unfollowkr = async (data)=> {
    const result = await httpAxios.post("api/followapi/unfollow", data);
    return result.data;
}