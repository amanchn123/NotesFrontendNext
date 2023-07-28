'use client'

// const init={
//     auth:localStorage.getItem("Credentials")?JSON.parse(localStorage.getItem("Credentials")):null,
//     authdata:auth
// }
let authdata="pppppp"

if (typeof window !== 'undefined') {
    // Check if localStorage is available in the current environment (browser)
    const credentials = localStorage.getItem("Credentials");
    authdata = credentials ? JSON.parse(credentials) : "kkkkkk";
  }
  
  const init = {
    authdata: authdata
  };


export const LoginRed=(state=init?init:"",action)=>{
    
  switch(action.type){
    case "LOGIN_REQUEST":
        return{...state,loading:true}

    case "LOGIN_SUCCESS":
        return{...state,authdata:action.payload,loading:false}
        
    case "LOGIN_FAILED":
        return{...state,loading:false}
     
    default:
        return{...state}    
  }
}

export const logoutRed=(state,action)=>{
   switch(action.type){
    case "CLEAR_ALL":
      return{...state,LoginRed:{}}

    default:
      return{...state}  
   }
}