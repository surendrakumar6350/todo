import axios from "axios";
export const httpAxios = axios.create({
    baseURL:'http://localhost:3000'

    // https://todo-beta-indol.vercel.app
    // http://localhost:3000
});
