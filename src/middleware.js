import { NextResponse } from "next/server"
import { useSelector } from "react-redux"
import {LoginRed} from './reducer/Loginreducer'
import Store from './store/store'


export const middleware=async(request) =>{

  return NextResponse.redirect(new URL('/adminlogin',request.url))
}

export const config={
    matcher:['/adminpage','/BCA']
}