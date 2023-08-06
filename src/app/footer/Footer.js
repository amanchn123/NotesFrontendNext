import { Grid } from '@mui/material'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
     <Grid lg={12} container style={{backgroundColor:"gray",padding:"30px"}}>
        <Grid lg={6} sx={12} style={{display:"grid",justifyContent:"center"}}>
        <header
            style={{
              fontSize: "35px",
              display: "grid",
              fontFamily: "monospace",
              justifyContent: "center",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
         Collage Notes
          </header>    
         <b style={{justifyContent:"center",display:"grid"}}> Our Links</b>
        <span style={{display:"flex",justifyContent:"space-evenly"}}>
          <ul>
            <li><Link href='/abouts'>About Us</Link></li>
            <li><Link href='/abouts'>Services</Link></li>
            <li><Link href='/abouts'>Our Team</Link></li>
          </ul>

          <ul>
          <li><Link href='/abouts'>Contribute</Link></li>
            <li><Link href='/abouts'>Donate</Link></li>
            <li><Link href='/abouts'>T & C</Link></li>
          </ul>
        </span>
        </Grid>
        <Grid lg={6} sx={12} style={{display:"grid",justifyContent:"center"}}>
        <header
            style={{
              fontSize: "25px",
              display: "grid",
              fontFamily: "monospace",
              justifyContent: "center",
              lineHeight: "1",
              marginBottom: "10px",
            }}
          >
         <b>Let's Connect</b>
          </header>
          <div style={{display:"flex",justifyContent:"center"}}>
          <Link href='//www.linkedin.com/in/aman-chouhan-a963031a8'><img style={{height:"40px"}} src='/linkdin.png'/></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='//www.instagram.com/code__good/'><img style={{height:"40px"}} src='/Instagram.png'/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='//www.github.com/amanchn123'><img style={{height:"40px"}} src='/github.png'/></a>
          </div>
        </Grid>
     </Grid> 
    </>
  )
}
