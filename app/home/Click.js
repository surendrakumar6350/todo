import React from 'react'
import { useRouter } from 'next/navigation';

const Click = (props) => {
    const router = useRouter();
    const {uerid} = props
    const clicked = ()=> {
        router.push(`/profile/${uerid}`)
    }
  return (
    <>
    <button className='homebtn' onClick={clicked}><img className='homepic' src='https://img.freepik.com/free-photo/user-profile-icon-front-side_187299-39596.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais'></img></button>
    </>
  )
}

export default Click