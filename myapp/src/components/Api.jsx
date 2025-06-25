import  axios  from 'axios'
import {React, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Api = () => {
    var[user, setUser]=useState([])
    axios.get("http://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        setUser(res.data)
    })
  return (
    <div>
        <h2>Table</h2>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody> {user.map((val)=>{
                    return(
                
                    <TableRow>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.address.city}</TableCell>
                </TableRow>)
                })}
                </TableBody>
            </Table>
        </TableContainer>
       

    </div>
  )
}

export default Api