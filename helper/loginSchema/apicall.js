import { httpAxios } from "../httpAxios";

export const loginapi = async (data)=> {
const result = await httpAxios.post("/api/login", data);
return result.data;

}