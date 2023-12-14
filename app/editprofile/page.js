'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadnewpic } from '@/helper/LikesSchema/updatepic';

export function UploadForm() {
  const [file, setFile] = useState()
  const [process, setprocess] = useState("upload")

  const onSubmit = async (e) => {
    e.preventDefault()
    setprocess("Please Wait..")

      const data = new FormData()
      data.append('file', file)
      data.append("upload_preset","pwjilpw7")
      data.append("cloud_name","drlyu0rbn")

      const res = await fetch('https://api.cloudinary.com/v1_1/drlyu0rbn/image/upload', {
        method: 'POST',
        body: data
      })
   const result = await res.json()
   
   if(result.url) {
(async()=> {
 const ans = await uploadnewpic({newurl: result.url})
if(ans.success) {
  toast("Profile Photo Changed")
  setprocess("upload")
}
else {
  toast(`ERRoR..     ${ans.message}`)
    setprocess("upload")
 }
})()
   }

   
   else {
    toast("ERRoR..")
    setprocess("upload")
  }
  
 


  }
  

  return (
    <>
    <ToastContainer />
    <div>Upload Image to change Profile pic</div>
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input style={{cursor: "pointer"}} type="submit" value={process} />
    </form>
    </>
  )
}
export default UploadForm
