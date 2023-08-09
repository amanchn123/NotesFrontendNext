'use client'

import { Provider } from "react-redux";
import Store from "./store/store";
import { ThemeProvider } from "next-themes";
import {AnimatePresence,motion} from 'framer-motion'

export const Prov=({children})=>{
  return(
    <Provider store={Store}>
    <ThemeProvider>
    <AnimatePresence>
    <motion.div

    >
        {children}
        </motion.div>
        </AnimatePresence>
    </ThemeProvider>    
    </Provider>
  )
}