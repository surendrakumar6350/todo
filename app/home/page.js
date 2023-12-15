"use client"
import React, { useEffect, useState } from 'react'
import { allUsersTasks } from '@/helper/homefunction/homes'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import Click from './Click'
import LikeCommentSection from '@/Components/LikeAndComment/LikeAndComment'
import { useRouter } from 'next/navigation';
const page = () => {
  const router = useRouter();
  const [data, setdata] = useState([])
 const [dataloding, setdataloding] = useState({
  display: "flex"
 })
  const rahul = ()=> {
    setTimeout(() => {
      (async()=> {
        const all = await allUsersTasks();
        setdataloding({
          display: "none"
        })
        const alll = await all.data.alldata.reverse();
        setdata(alll)
            })()
    }, 500);
  }
  useEffect(rahul,[])


  return (
    <>
    <Nav/>
    
      {data?.map((e)=> {
 return <div style={{marginBottom: "30px"}}> 
  
  <div onClick={()=> {
    router.push(`/profile/${e.userid}`)
  }} style={{padding: "0px 10px", cursor: "pointer"}} className="info-bar" key={e._id + "1"}> 
          <div key={e._id + "2"}>
            <h2 key={e._id + "3"}>{e.title}</h2>
            <p key={e._id + "4"}>{e.text}</p>
          </div>
          <div className='homediv' style={{width: '60px'}}>
          <Click uerid={e.userid}/>
          <pre className='name'>By: {e.name}</pre>
          </div>  
        </div>

        <LikeCommentSection key={e._id} data={{...e}}/>
        </div>
  })}

<div className='animation' style={dataloding}>
<div className="lds-roller" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
 
  <Footer/>
    </>
  )
}

export default page