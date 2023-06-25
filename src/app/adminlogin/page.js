'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/admin.module.css'
import {Button,Input} from '@mui/material';
import { LoginAction } from '../../action/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function page() {
  
  // const navigate=useNva
  const [username,setUsername]=useState()
  const[password,setPassword]=useState()
  

  const dispatch=useDispatch()


  const details=useSelector((state)=>state.LoginRed?state.LoginRed.authdata:null)
  const router=useRouter()

  if(details!==null){
    router.push('/adminpage')
  }
    
  const submit=async()=>{
    const data=await {username,password}
    console.log(data)
    dispatch(LoginAction(data))

  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <span>Login As Admin (teacher)</span>
      <div className={styles.inp}>
      <Input type='text' placeholder='enter the username' onChange={(e)=>setUsername(e.target.value)} ></Input><br />
      <Input type='text' placeholder='enter the password' onChange={(e)=>setPassword(e.target.value)}></Input><br />
      
        <div><Button style={{backgroundColor:"green"}} variant="contained" color="success" onClick={submit}>Login</Button></div>
      </div>
      </div>
    </div>
  )
}