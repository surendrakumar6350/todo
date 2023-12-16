import { finduser } from '@/helper/userprofile/finduser'
import React, { useEffect, useState } from 'react'

const Commentdetails = ({props}) => {
    const [uss, setuss] = useState()
    const e = props
    const userid = e.userid
    useEffect(()=> {
(async()=> {
const {user} = await finduser({id: userid})
setuss(user)
})()
    },[])
  return (
    <>
 <div style={{width: "60px", height: "60px",borderRadius: "50%", backgroundImage: `url('${uss?.picture}')`, backgroundSize: "cover"}}></div>
    <div style={{display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "5px"}}>
      <p style={{padding: "0px", margin: "0px", fontSize: "15px"}}>{uss?.username}</p>
      <h3 style={{color: "black",padding: "0px", margin: "0px", fontSize: "10px"}}>{e.comment}</h3>
    </div> 
    </>
  )
}

export default Commentdetails