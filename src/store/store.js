'use client'

import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'



import { LoginRed,logoutRed,modeChange } from "../reducer/Loginreducer";

console.log("stoooooo",LoginRed)

const rootreducer=combineReducers({
    LoginRed,
    logoutRed,
    modeChange
})

const mainRoot=(state,action)=>{
    if(action.type=="CLEAR_ALL"){
      return state={...state,LoginRed:{}}
    }
    
    return rootreducer(state,action)
  }
  

const Store=configureStore({
    reducer:mainRoot
})

export default Store;