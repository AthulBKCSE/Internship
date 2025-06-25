import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const Select = () => {
  var [name,setName]= useState()

  const out1=()=>{
    setName=("React")
  }
  const out2=()=>{
    setName=("Angular")
  }
  const out3=()=>{
    setName=("Next")
  }
  //useEffect loads function out2 at the time of loading page.
  //useEffect(()=>{
   // out2()
  //},[])
  return (
    <div>
      <h1>Welcome</h1>
      <h2>{name}</h2>
        <Button variant='contained' color='success' onClick={out1} >React </Button>
        <Button variant='contained' color='success' onClick={out2} >Angular </Button>
        <Button variant='contained' color='success' onClick={out3} >Next </Button>
    </div>
  )
}
export default Select