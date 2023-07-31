'use client'

import { Audio } from  'react-loader-spinner'

export default function(){
return(
  <div style={{display:"grid",placeItems:"center",minHeight:"100vh"}}>
      <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
  </div>
)
}