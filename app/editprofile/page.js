'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function UploadForm() {
  const [file, setFile] = useState()
  const [process, setprocess] = useState("upload")

  const onSubmit = async (e) => {
    e.preventDefault()
    setprocess("Please Wait..")
   
      const data = new FormData()
      data.set('file', file)
      

      const res = await fetch('api/upload', {
        method: 'POST',
        body: data
      })
   const result = await res.json()
   setprocess("upload")
   if(result.success) {
    toast("Profile Photo Changed")
   }
   else {
    toast("ERRoR..")
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
