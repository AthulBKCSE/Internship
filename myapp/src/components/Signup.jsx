import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Signup = () => {
  return (
    <div>
       <h1>Welcome</h1>
        <h2>Signup</h2>
        <TextField id="Name" label="Username" variant="outlined" /> <br />
        <TextField id="Password" label="Password" variant="outlined" /> <br />
        <Button variant="contained">Continue</Button> 
    </div>
  )
}

export default Signup