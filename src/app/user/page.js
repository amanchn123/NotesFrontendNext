'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function page() {
  
  const[mounted,setMounted]=useState(false)
  useEffect(()=>{
setMounted(true)
  },[])

  if(!mounted){
    return (<>
      <h1>Loadingggg/....grfgerfe.</h1>
    </>)
  }
  return (
    <div>
      <h1>Userr</h1>
    </div>
  )
}