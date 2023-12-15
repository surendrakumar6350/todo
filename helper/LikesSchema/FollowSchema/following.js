import { httpAxios } from "@/helper/httpAxios";
export const following = async (data)=> {
    const result = await httpAxios.post("api/followapi/allfollowing", data);
    return result.data;
}



export const findcookies = async ()=> {
    const result = await httpAxios.post("api/followapi/findvalue");
    return result.data;
}