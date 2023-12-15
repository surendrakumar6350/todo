import axios from "axios";
export const httpAxios = axios.create({
    baseURL:'https://todo-beta-indol.vercel.app'

    // https://todo-beta-indol.vercel.app
    // http://localhost:3000
});
