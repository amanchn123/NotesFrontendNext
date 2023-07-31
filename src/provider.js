'use client'

import { Provider } from "react-redux";
import Store from "./store/store";
import { ThemeProvider } from "next-themes";

export const Prov=({children})=>{
  return(
    <Provider store={Store}>
    <ThemeProvider>
        {children}
    </ThemeProvider>    
    </Provider>
  )
}