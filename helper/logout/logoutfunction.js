import axios from "axios";


export async function logoutw() {
    try {
    const result = await axios.get("api/logout");
    return result;

}
catch (error) {
    console.log(error);
}
}