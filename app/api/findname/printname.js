import { httpAxios } from "@/helper/httpAxios";

export async function name() {
    const result = await httpAxios.get("/api/findname");
    const name = result.data[0].username;
    return name;
}