import { httpAxios } from "../httpAxios";

export const matchkro = async(data)=> {
    const result = await httpAxios.post("/api/matchotp", data)
    return result
}