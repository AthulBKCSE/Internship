import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

const Name =() => {
     var[name,setname]= useState()
     var [a,seta]= useState()
     const inputHandler=(e)=>{
        console.log(name)
        console.log(e.target.value)
        setname(e.target.value)
     }
     const submitHandler=()=>{
        seta(name)
     }
    return(
     <div>
      <h1>Welcome</h1>
      <h2>{a}</h2>  
      <TextField variant="outlined" onChange={inputHandler} /> <br />
      <Button onClick={submitHandler}>Add</Button>
     </div>   
    )
}
export default Name