// 'use client'

import { NextResponse } from "next/server"
import { useSelector } from "react-redux"
import {LoginRed} from './reducer/Loginreducer'
import Store from './store/store'

export const middleware=async(request) =>{

  const authdatas=Store.getState().LoginRed;
  console.log('autgdata',authdatas)

  if(authdatas==null){
    return NextResponse.redirect(new URL('/adminlogin',request.url))
  }

  
}

export const config={
    matcher:['/abouts']
}