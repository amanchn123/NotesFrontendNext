import axios from 'axios'
import { Api_url } from '../apiurl'

export const LoginAction=(data)=>async(dispatch)=> {
   dispatch({type:"LOGIN_REQUEST"})
   console.log("KK")
   try{
    
      const result=await axios.post(`${Api_url}/api/login`,{
        username:data.username,
        password:data.password
      })
  
     console.log(":::",result.data.response)

      if(result.data.success){
        localStorage.setItem("Credentials",JSON.stringify(result.data.response))
      }
      dispatch({type:"LOGIN_SUCCESS",payload:result.data.response})
   }catch{
     console.log("error frontend")
     dispatch({type:"LOGIN_FAILED"})
   }
}

export const logoutAction=()=>dispatch=>{
  try{
     dispatch({type:"CLEAR_ALL"})
  }catch (error){
    console.log("error")
  }
}