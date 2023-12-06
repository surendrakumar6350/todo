import { httpAxios } from "../httpAxios";

export const pinset = ()=> {
    const res = httpAxios.get("/api/pin")
}