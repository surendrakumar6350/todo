import { httpAxios } from "../httpAxios";

export async function uploadnewpic(task) {
    const result = await httpAxios.post("api/upload", task);
    return result.data
}