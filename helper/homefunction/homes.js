import { httpAxios } from "../httpAxios";
export const allUsersTasks = async ()=> {
    const result = await httpAxios.get("/api/home");
    return result
}