"use client"
import { deletetask } from '@/helper/deletetaskbyuser/deletetaskuser'
import React from 'react'

export const Deletebutton = (props) => {
  const id = props.id
  const fnc = props.delete
  const Not = props.Notdeleted
    const clicked = ()=> {
      (async()=> {
 const res = await deletetask({id});
 if(res.success) {
fnc(id)
 }
 else {
Not()
 }
      })()
    }
  return (
    <>
    <button onClick={clicked} className="btn-1">Delete</button>
    </>
  )
}