"use client"
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import Nav from '@/Components/Nav'
import Footer from '@/Components/Footer'
import { addtask } from '@/helper/apicall'


const page = () => {
  const [text, settext] = useState("Submit")
  const [task, settask] = useState({
    title:"",
    text:""
  })

  const submit = async (event)=> {
    event.preventDefault();
    settext("Please Wait")
if(task.title.length <=  3) {
  toast("title is too short");
  settext("Submit")
}
else if (task.text.length <= 5) {
  toast("text box is too short");
  settext("Submit")
}
else {
    const result = await addtask(task);
    if(result.success) {
      settask({
        title:"",
        text:""
      });
      toast(`posted ${task.title}`);
      settext("Submit")
    }
  }
  }
  return (
    <>
    <Nav/>
    
    <form method='post'>
    <label htmlFor="title">Title:</label>
    <input type="text" id="title"  value={task.title} name="title" placeholder='Title' onChange={(e)=> settask({
      ...task,
      title: e.target.value
    })} required />

    <label htmlFor="content">Text:</label>
    <textarea id="content" name="content" value={task.text} rows={5} placeholder="What's in your mind" onChange={(e)=> settask({
      ...task,
      text: e.target.value
    })} required></textarea>

    <button onClick={submit} type="submit">{text}</button>
    
  </form>

    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default page