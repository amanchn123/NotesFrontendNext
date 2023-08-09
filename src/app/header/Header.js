"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/navigation";
import { IoIosLogIn } from "react-icons/io";
import { MdPersonAddAlt } from "react-icons/md";
import {useTheme} from 'next-themes'
import {BsMoon} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {logoutAction} from '../../action/loginAction'
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion' 


const pages = [{href:'/user',name:"user"} ,{href:'/abouts',name:'products'}];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function page() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname=usePathname()

  const router = useRouter();
  
  const dispatch=useDispatch()
  const details=useSelector((state)=>state.LoginRed?state.LoginRed.authdata:null)

  
  const logout=async()=>{
    await localStorage.clear("Credentials")
    dispatch(logoutAction())
    router.push('/')
    
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{backgroundColor: "rgb(58, 54, 54)"}}>
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => router.push("/")}
            sx={{
              mr: 2,
              cursor: "pointer",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1500,
              letterSpacing: ".3rem",
              color: "inherit",
              fontSize: "40px",
              textDecoration: "none",
            }}
          >
            CollageNotes
          </Typography>

          <Typography
          onClick={() => router.push("/")}
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "20px",
              cursor:"pointer"
            }}
          >
            CollageNotes 
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none",placeItems:"center",justifyContent:"end" } }}>
          {theme==='dark'? <BsSun onClick={()=>setTheme("light")} size={23} style={{cursor:"pointer"}} />:
            <BsMoon onClick={()=>setTheme("dark")} size={23} style={{cursor:"pointer"}} />}

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>


          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "end",
                placeItems: "center",
              },
            }}
          >
            {pages.map((page) => (
              <motion.div
              whileHover={{scale:1.1}}
              >
              <Link
                // key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                href={page.href}
                className={`${page.href===pathname?"text-yellow-500":""} ml-10`} 
              >
                {page.name}
              </Link>
              </motion.div>
            ))}
            &nbsp;&nbsp;
              {details==null?           <Link href='/adminlogin'>
           <Button
              variant="contained"
              color="success"
              style={{
                fontSize: "16px",
                height: "35px",
                backgroundColor: "green",
              }}
            >
              <IoIosLogIn /> &nbsp; Login
            </Button>&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
           </Link>: 
           <Button
           onClick={logout}
              variant="contained"
              color="success"
              style={{
                fontSize: "16px",
                height: "35px",
                backgroundColor: "green",
              }}
            >
              <IoIosLogIn /> &nbsp; Logout
            </Button>
           } &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
            {theme==='dark'? <BsSun onClick={()=>setTheme("light")} size={25} style={{cursor:"pointer"}} />:
            <BsMoon onClick={()=>setTheme("dark")} size={25} style={{cursor:"pointer"}} />}
            &nbsp;&nbsp;
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}