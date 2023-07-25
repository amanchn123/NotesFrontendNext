'use client'

import { combineReducers } from "redux";
<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
=======
import { configureStore } from '@reduxjs/toolkit';
>>>>>>> 06d011a (pageee)

import { LoginRed,logoutRed } from "../reducer/Loginreducer";

const rootreducer=combineReducers({
    LoginRed,
    logoutRed
})

const Store=configureStore({
    reducer:rootreducer
})


export default Store;