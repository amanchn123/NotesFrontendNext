'use client'
import styles from '../../styles/btech.module.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Api_url } from '../../apiurl';
import { Navigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react'



export default function page() {

    const [branch,setBranch]=React.useState(null)
    const [sec,setSec]=React.useState(null)
    const [sem,setSem]=React.useState(null)
    const [sub,setSub]=React.useState(null)
    const [unit,setUnit]=React.useState(null)
    const[data,setData]=React.useState([])
    const[loading,setLoading]=React.useState(false)

    
    const fileref=React.useRef() 

    const handleChangesem= (event) => {
      setSem(event.target.value);
    };

    const handleChangebranch = (event) => {
      setBranch(event.target.value);
    };
    const handleChangesec = (event) => {
      setSec(event.target.value);
    };
    const handleChangesub = (event) => {
      setSub(event.target.value);
    };
  
  const search=async()=>{

    if(branch!==null && sem!==null && sec!==null){
      try{
        setLoading(true)
        const result=await axios.post(`${Api_url}/api/getnotes`,{
         building:"MCA",
         sem,
         course:"BCA",
         branch,
         sec,
         sub
        })
        setLoading(false)
        console.log("resuit",result.data)
        if(result.data==0){
          alert(`There is no Notes Available for this selection`)
        }
       await setData(result.data)

       }catch (error){
        console.log(error)
     }
    }else{
      alert("select all")
    }
  }


    const handleDownload = (fileUrl,event) => {
      event.preventDefault();
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = "fileName";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

  return (
    <div className={styles.container}>
     <div className={styles.selec}>
     <h3>Select options</h3>
     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={branch}
          label="Age"
          onChange={handleChangebranch}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"Ai/Da"}>BCA AI/DA</MenuItem>
          <MenuItem value={"plain"}>BCA plain</MenuItem>
        </Select>
        {/* <FormHelperText>required</FormHelperText> */}
      </FormControl>

     <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Semester</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sem}
          label="Age"
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
        </Select>
        {/* <FormHelperText>required</FormHelperText> */}
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
  <Button style={{backgroundColor:"green"}} variant="contained" onClick={search}>search Notes</Button>
     </FormControl>
     </div>
     <div className={styles.flexcontainer}>
     {loading?(<h1>Loading...</h1>):
    ( data.length!==0? data.map((ele)=>{
        return(
        <div className={styles.flexitem} >
        <a style={{backgroundColor:"yellowgreen",margin:"5px",display:"grid",justifyContent:"center"}} className='downloadLink' download={ele.sub} onClick={()=>handleDownload(ele.note,event)}>
        <img src='https://www.computerhope.com/jargon/d/doc.png' /><span style={{display:"flex",justifyContent:"center"}}>Unit-{ele.unit}</span>
        </a>
        </div>
        )
       }):"")}
     </div>
    </div>
  )
}

export function generateMetadata({params}){
  return{
    title:"BCA"
}
}