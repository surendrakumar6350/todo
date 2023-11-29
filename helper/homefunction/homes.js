import { httpAxios } from "../httpAxios";
export const allUsersTasks = async ()=> {
    const result = await httpAxios.post("/api/home");
    return result
}