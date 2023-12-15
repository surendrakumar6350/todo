import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { finduser } from '@/helper/userprofile/finduser';

const Click = (props) => {
  const [piclink, setpiclink] = useState()
    const router = useRouter();
    const {uerid} = props
    const clicked = ()=> {
        router.push(`/profile/${uerid}`)
    }

    const fnc = ()=> {
      (async()=> {
      const result = await finduser({id: uerid})
      const user = result.user
      
      setpiclink(user.picture || "https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais")
      })()
      }
      useEffect(fnc,[])


  return (
    <>
    <button className='homebtn' onClick={clicked}>
      {/* <img className='homepic' src={piclink}></img> */}
      <div className='homepic' style={{backgroundImage: `url(${piclink})`, width: "100%", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
    </button>
    </>
  )
}

export default Click