

import { httpAxios } from "../httpAxios";

export const loginapi = async (data)=> {
    console.log("login httpsaxios called")
const result = await httpAxios.post("/api/login", data);
return result.data;


}