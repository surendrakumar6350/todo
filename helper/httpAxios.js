import axios from "axios";
export const httpAxios = axios.create({
    baseURL:"https://todo-beta-indol.vercel.app"
});
