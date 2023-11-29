import { httpAxios } from "../httpAxios"
export const logout = async()=> {
    try{
        console.log("logout function called")
    const resultof =  await httpAxios.post("/api/logout")
    if(resultof.data.success == true) {
        console.log("logout successful")
    }
    }
  catch (error) {
  console.log(error)
  }
  
  }