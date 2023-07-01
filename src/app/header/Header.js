'use client'
import React, { useEffect } from 'react'
import styles from '../../styles/header.module.css'
import Link from 'next/link'
import { logoutAction } from '../../action/loginAction'
import { useDispatch, useSelector } from 'react-redux'
import {Button,Input} from '@mui/material';
import { useRouter } from 'next/navigation'


export default function Header() {
  const router=useRouter()
  const dispatch=useDispatch()

  const logout=async()=>{
    dispatch(logoutAction())
    localStorage.clear("authdata")
    router.push("/")
  } 

  const details=useSelector((state)=>state.LoginRed?state.LoginRed.authdata:null)


  return (
    <header className={styles.header}>
          <div className={styles.log}><Link href='/'> <img src="https://www.admissionindia.net/uploads/colleges/31/logo.png" /></Link></div>
          <div className={styles.clgname}>LNCT UNIVERSITY - NOTES</div>
          <Link className={styles.btn} style={{backgroundColor:"yellow",padding:"10px",borderRadius:"4%",display:details!==null?"none":"grid"}} href='/adminlogin' >Admin Login</Link>
          <Button className={styles.btn} style={{backgroundColor:"yellow",padding:"10px",display:details!==null?"grid":"none"}} onClick={logout}>Logout</Button>
    </header>
  )
}



https://www.instagram.com/reel/Cr8bNxngbZ6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==