'use client'
import Link from 'next/link'
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
      <ul>
        <li><Link href='user/aditya'>1</Link> </li>
        <li><Link href='user/aman'>2</Link> </li>
        <li><Link href='user/sumit'>3</Link> </li>
      </ul>
    </div>
  )
}