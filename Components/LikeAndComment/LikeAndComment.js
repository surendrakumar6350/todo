"use client"
import React, { useEffect, useState } from 'react';
import { FcLikePlaceholder } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { likerr } from '@/helper/LikesSchema/Likerr';
import { dislikerr } from '@/helper/LikesSchema/Likerr';
import { likefinder } from '@/helper/LikesSchema/likefinder';
import { findalllike } from '@/helper/LikesSchema/alllikess/findalllike';
import { FcLike } from "react-icons/fc";
import { createcomments } from '@/helper/axioscalles/createtaskcomment';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Commentdetails from './Commentdetails';
import { findbyidd } from '@/helper/userprofile/findtaskbyidd';


const LikeCommentSection = ({data, bc }) => {
  const router = useRouter();
  const postid = data?._id;
  const [display, setdisplay] = useState(false)
  const [errorr, seterrorr] = useState("")
  const [like, setlike] = useState(false)
  const [message, setmessage] = useState("")
  const [count, setcount] = useState()
  const [ff, setff] = useState("none")
  const [uploading, setuploading] = useState("Submit")
  const [allcomment, setallcomment] = useState()

useEffect(()=> {
  (async()=> {
const hii = await findbyidd({postid})
setallcomment(hii.allcomments.reverse())
  })()
},[uploading])

  const redirecttoprofile = (userid) => {
    router.push(`/profile/${userid}`)
  }


  const trueLike = () => {
    (async () => {
      setlike((pre) => !pre)
      const res = await likerr({ postid })
      if (res.success) {
        setlike(true)
      }
      else {
        setlike((pre) => !pre)
        seterrorr("ERRoR!! login first")
        setTimeout(() => {
          seterrorr("")
        }, 3000)
      }
    })()
    console.log("like added")
  };
  const falselike = () => {
    (async () => {
      setlike((pre) => !pre)
      const ress = await dislikerr({ postid })
      if (ress.success) {
        setlike(false)
      }
      else {
        setlike((pre) => !pre)
        seterrorr("ERRoR!! try again")
        setTimeout(() => {
          seterrorr("")
        }, 3000)
      }
    })()
    console.log("like removed")
  }

  useEffect(() => {
    (async () => {
      const result = await likefinder({ postid })
      if (result.success) {
        setlike(true)
      }
      const likkk = await findalllike({ postid })
      setmessage(likkk)
      setcount(likkk.message.length)
    })()
  }, [like])

  return (
    <>
      <div style={{ zIndex: "20", background: "white", display: `${ff}`, position: "absolute", height: "400px", width: "80%", border: "1px solid", overflow: "scroll" }}>
      </div>
      <div style={{ padding: '0px 5px', background: `${bc ? "#dadada" : "#fafafa"}` }}>
        <div style={{ display: 'flex', color: 'white', background: `${bc ? bc : "#fafafa"}`, marginRight: '10px' }}>
          <button onClick={() => {
            return like ? falselike() : trueLike()
          }} style={{ position: "relative", background: "#3498db", fontSize: "28px", color: 'white', padding: '2px 10px', marginRight: "40px", cursor: 'pointer', height: "50px" }}>

            {like ? <FcLike /> : <FcLikePlaceholder />}
            <p style={{ fontSize: "12px", lineHeight: "10px", textAlign: "center", margin: "0px" }}>Likes: {count}</p>
          </button>

          <button
            onClick={() => {
              setdisplay((pre) => !pre)
            }}
            style={{ background: '#3498db', transform: "translate(8px,0px)", margin: "0px", fontSize: "20px", color: 'white', padding: '2px 3px', cursor: 'pointer' }}
          >
            <FaComment style={{ marginBottom: "1px", fontSize: "24px" }} />
            <p style={{ fontSize: "10px", lineHeight: "10px", textAlign: "center", margin: "0px" }}>Total Comments: {allcomment?.length}</p>
          </button>
        </div>
        {errorr}


        <div style={{ display: `${display ? "block" : "none"}` }}>
          <div style={{ marginTop: '20px' }}>
            <textarea 
              placeholder="Add a comment..."
              style={{ width: '100%', padding: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}
              onChange={(e) => {
                setmessage(e.target.value)
              }}
            />
            <br />
            <button
              onClick={() => {
                (async () => {
                  if(message.length > 2) {
                  setuploading("Please Wait")
                 const ressponse =  await createcomments({ comment: message, postid: postid });
                 setuploading("Submit")
                 if(ressponse.success) {
                  toast("Comment Uploaded")
                  setmessage("")
                 }
                 else {
                  toast(`${ressponse?.message}`)
                 }
                }
                else {
                  toast("Comment is too Short")
                }
              })()
            }
            }
              style={{ background: 'blue', color: 'white', padding: '5px 10px', cursor: 'pointer' }}
            >
              {uploading}
            </button>
          </div>

          <div style={{ marginTop: '20px', color: 'blue', fontSize: '18px' }}>
            {/* Comments: */}
            <ul>
<div style={{width: "100%"}}>
{allcomment?.map((e)=> {
  return <div style={{width: "100%", height: "80px",  display: "flex", cursor: "pointer"}} onClick={()=> {
    redirecttoprofile(e.userid)
  }}>
    <Commentdetails key={e.userid} props={e}/>
  </div>
})}

</div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

};

export default LikeCommentSection;
