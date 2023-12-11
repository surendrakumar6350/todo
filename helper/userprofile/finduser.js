import { httpAxios } from "../httpAxios";

export const finduser = async (data)=> {
    console.log("finding all details of user axios called")
const result = await httpAxios.post("/api/profileuser", data);
return result.data;
}