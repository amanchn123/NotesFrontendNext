'use client'

import { useSelector } from 'react-redux'
import styles from '../../styles/admin.module.css'
import React,{useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { analytics } from '../firebase/firebase';
import {ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import axios from 'axios';
import { Api_url } from '../../apiurl';
import { useRouter } from 'next/navigation'



export default function page() {
   const [sem,setSem]=useState(null)
   const[course,setCourse]=useState([])
   const [branch,setBranch]=React.useState(null)
   const [sec,setSec]=React.useState(null)
   const [sub,setSub]=React.useState(null)
   const [unit,setUnit]=React.useState(null)
   const[inputfile,setInputfile]=useState(null)
   
   const fileref=React.useRef() 
   const router=useRouter()
    

   const handleChangecourse = (event) => {
     setCourse(event.target.value);
   };

   const handleChangebranch = (event) => {
     setBranch(event.target.value);
   };
   const handleChangesem = (event) => {
     setSem(event.target.value);
   };
   const handleChangesec = (event) => {
     setSec(event.target.value);
   };
   const handleChangesub = (event) => {
     setSub(event.target.value);
   };
 
   const handleChangeunit = (event) => {
     setUnit(event.target.value);
     
   };


       const getCred=useSelector((state)=>state.LoginRed?state.LoginRed.authdata:"")
       
      //  if(getCred==null){
      //   //  router.push("/")
      //  }
    
   const submit=async()=>{

    
    try{
      if(inputfile!==null){
        console.log("inputfile",inputfile[0])
        const imageref=ref(analytics,'notes/')
        uploadBytes(imageref,inputfile[0]).then(async(data)=>{
          await getDownloadURL(data.ref).then(async(url)=>{
           if(getCred.course == course){
            const response = await axios.post(`${Api_url}/api/notes`,{
              building:getCred.building,
              course:course,
              sem:sem,
              note:url,
              branch:branch,
              sec:sec,
              sub:sub,
              unit:unit,
            })


           }else{
            alert("you are not authiorize")
           }
          }).then(async()=>{

           alert(`Notes of unit ${unit} successfully uploaded`)
          })
        })
       
       }else{
        alert("Pls select all fields")
       }
    }catch (error){
      console.log(error)
    }
     }


  return (
    <div>
      <div className={styles.adminmain}>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={course}
          label="Age"
          onChange={handleChangecourse}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"MCA"}>MCA</MenuItem>
          <MenuItem value={"BCA"}>BCA</MenuItem>
          <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
          <MenuItem value={"M.Tech"}>M.Tech</MenuItem>
          <MenuItem value={"BBA"}>BBA</MenuItem>
          <MenuItem value={"MBA"}>MBA</MenuItem>
        </Select>
        {/* <FormHelperText>required</FormHelperText> */}
      </FormControl> 

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Semester</InputLabel>
        
        {course=="BCA" ||  course=="BBA"?<Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sem}
          label="Sem"
          onChange={handleChangesem}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
        </Select>:course=="B.Tech"?<Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sem}
          label="Sem"
          onChange={handleChangesem}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
          <MenuItem value={"8"}>8</MenuItem>
        </Select>:<Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sem}
          label="Sem"
          onChange={handleChangesem}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
        </Select>}

        {/* <FormHelperText>required</FormHelperText> */}
      </FormControl>


    
     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>

         {course=="B.Tech"? <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={branch}
          label="Age"
          onChange={handleChangebranch}
        >

          <MenuItem value={"Aa/Ml"}>AI/Ml</MenuItem>
          <MenuItem value={"CSE"}>CSE</MenuItem>
          <MenuItem value={"EC"}>EC</MenuItem>
          <MenuItem value={"Civil"}>Civil</MenuItem>
          <MenuItem value={"mechanical"}>mechanical</MenuItem>
        </Select>: <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={branch}
          label="Age"
          onChange={handleChangebranch}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"Ai/Da"}>AI/DA</MenuItem>
          <MenuItem value={"plain"}>plain</MenuItem>
        </Select>}     
  
      </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">SEC</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sec}
          label="Age"
          onChange={handleChangesec}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"All"}>All</MenuItem>
        </Select>
        {/* <FormHelperText>required</FormHelperText> */}
      </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">SUB</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sub}
          label="Age"
          onChange={handleChangesub}
        >

          <MenuItem value={"C++"}>C++</MenuItem>
          <MenuItem value={"DSA"}>DSA</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"Maths"}>Maths</MenuItem>
          <MenuItem value={"communication"}>communication</MenuItem>

        </Select>
     </FormControl>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <label>Enter the Unit Number or Name</label>
        <input style={{border:"2px solid black"}} type='text' onChange={handleChangeunit} placeholder='unit name or no..'></input>
        <input ref={fileref} style={{display:"none"}} type='file' onChange={(event)=>setInputfile(event.target.files)} ></input>
       <Button style={{display:branch !==null && sec!==null && sub!==null && unit!==null?"":"none"}} onClick={()=>fileref.current.click()} >Select Document file </Button>
     </FormControl>
     <div><Button style={{backgroundColor:"green"}} variant="contained" onClick={submit}>Upload</Button></div>
     </div>
     
     
    </div>
  )
}