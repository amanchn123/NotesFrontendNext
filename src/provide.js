'use client'

import { Provider } from "react-redux";
import Store from "./store/store";

export const Prov=({children})=>{
  return(
    <Provider store={Store}>
        {children}
    </Provider>
  )
}