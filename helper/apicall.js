import { httpAxios } from "./httpAxios";
export async function addtask(task) {
    const result = await httpAxios.post("api/tasks", task);
    const falsee = { message:" failed to create task",
    success:false}
    if(result.data.success) {
        return result.data;
    }
}