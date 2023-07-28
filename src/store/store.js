'use client'

import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit'



import { LoginRed,logoutRed } from "../reducer/Loginreducer";

const rootreducer=combineReducers({
    LoginRed,
    logoutRed
})

const Store=configureStore({
    reducer:rootreducer
})

export default Store;