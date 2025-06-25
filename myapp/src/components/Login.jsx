import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div>
      <h1>Welcome</h1>
        <h2>Login</h2>
    <TextField id="Username" label="Username" variant="outlined" /> <br />
    <TextField id="Passwod" label="Password" variant="outlined" /> <br />
    <Button variant="contained">Continue</Button> 
    </div>
  )
}

export default Login