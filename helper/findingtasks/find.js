import { httpAxios } from "../httpAxios";

const ankit = async()=> {
    try {
    const red = await httpAxios.get("/api/findtask");
    const result =  red.data.alltask;
    console.log(`form axios ${result}`)
    return result;
    }
    catch (error) {
        console.log(error);
    }
}
export default ankit