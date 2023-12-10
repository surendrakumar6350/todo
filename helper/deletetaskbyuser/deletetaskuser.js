import { httpAxios } from "../httpAxios";

export const deletetask = async(data)=> {
const result = await httpAxios.post("/api/deletetask", data)
return result.data
}