import React from 'react'

import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <div>
            <AppBar color='success'>
                <Toolbar>
                    <Link to= '/login' >
                     <Button variant="contained">Login</Button> &nbsp;
                     </Link>
                    <Link to= '/signup' >
                      <Button variant="contained">Sign up</Button> &nbsp;
                      </Link>
                      <Link to= '/name' >
                      <Button variant="contained">Names</Button>
                      </Link>
                      <Link to= '/name3' >
                      <Button variant="contained">Select</Button> &nbsp;
                      </Link>
                      <Link to= '/api' >
                      <Button variant="contained">Api</Button> &nbsp;
                      </Link>
                </Toolbar>
            </AppBar> <br /><br /><br /> <br />
        </div>
    )
}
export default Navbar