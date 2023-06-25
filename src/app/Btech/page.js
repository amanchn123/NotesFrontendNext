'use client'
import styles from '../../styles/btech.module.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function page() {
    const [building, setBuilding] = React.useState('');
    const [branch,setBranch]=React.useState(" ")
    const [sec,setSec]=React.useState(" ")
    const [sub,setSub]=React.useState(" ")

    const handleChangebuil = (event) => {
      setBuilding(event.target.value);
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
  
  return (
    <div className={styles.container}>
  <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Building</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={building}
          label="Age"
          onChange={handleChangebuil}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"Main"}>M-building</MenuItem>
          <MenuItem value={"S"}>S-building</MenuItem>
          <MenuItem value={"E"}>E-building</MenuItem>
          <MenuItem value={"U"}>U-building</MenuItem>
        </Select>
        {/* <FormHelperText>required</FormHelperText> */}
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={branch}
          label="Age"
          onChange={handleChangebranch}
        //   renderValue={(value) => `⚠️  - ${value}`}
        >
          {/* <MenuItem value="">
     
          </MenuItem> */}
          <MenuItem value={"AI/ML"}>AI/Ml</MenuItem>
          <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
          <MenuItem value={"EC"}>EC</MenuItem>
          <MenuItem value={"Electronics"}>Electronics</MenuItem>
          <MenuItem value={"Civil"}>Civil</MenuItem>
          <MenuItem value={"CS"}>CS</MenuItem>
        </Select>
        {/* <FormHelperText>Error</FormHelperText> */}
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Sec</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={sec}
          label="Age"
          onChange={handleChangesec}
        //   renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">

          </MenuItem>
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
        </Select>
        {/* <FormHelperText>Error</FormHelperText> */}
      </FormControl>

      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Sub</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={sub}
          label="Age *"
          onChange={handleChangesub}
        >
          {/* <MenuItem value=""> */}
            {/* <em>None</em> */}
          {/* </MenuItem> */}
          <MenuItem value={"DSA"}>DSA</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"C++"}>C++</MenuItem>
          <MenuItem value={"Maths"}>Maths</MenuItem>
        </Select>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>

    </div>
  )
}
