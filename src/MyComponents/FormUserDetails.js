
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavBar from './NavBar';




const FormUserDetails = (props) => {

    const clickHandler = (e) => {
      e.preventDefault();
      props.next();
    }

    const changeHandler1 = (e) => {
      const input = "fname";
      props.textValues(input, e);
    }


    return (

        <>
          <NavBar title="User Details" />

          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '29ch' }, }} noValidate
            autoComplete="off" >
          <div style={{ marginLeft: "200px", marginTop: '40px' }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value1 } onChange={ changeHandler1 } id="outlined" label="Enter First Name" placeholder="Required" />
          </div>
          <div style={{ marginLeft: "200px" }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value2 } onChange={ (e) => { const input='lname'; props.textValues(input, e); } } id="outlined" label="Enter Last Name" placeholder="Required" />
          </div>
          <div style={{ marginLeft: "200px" }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value3 } onChange={ (e) => { const input='email'; props.textValues(input, e); } } id="outlined" label="Enter Email-id" placeholder="Required"  />
          </div>
          <Button variant="contained" disabled={ props.value1.length < 3 || props.value2.length < 3 || props.value3.length < 15 } style={{ marginLeft: "220px", marginTop: "20px" }} onClick={ clickHandler }>Continue<NavigateNextIcon /></Button>
          </Box>
        </>

    );
}



export default FormUserDetails;

