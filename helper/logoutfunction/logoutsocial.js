import { httpAxios } from "../httpAxios"
export const logoutsocial = async()=> {
    try{
        console.log("logout function called")
    const resultof =  await httpAxios.post("/api/clearauth")
    if(resultof.data.success == true) {
        console.log("logout successful")
        return resultof.data.success
    }
    }
  catch (error) {
  console.log(error)
  }
  
  }