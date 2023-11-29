import { httpAxios } from "../httpAxios";

export const findalltask = async()=> {
    const usertasks = await httpAxios.post("/api/findtask")
    return usertasks.data
}