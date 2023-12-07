import { httpAxios } from "../httpAxios";

export const pinset = ()=> {
    const res = httpAxios.post("/api/pin")
}