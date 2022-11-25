
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavBar from './NavBar';



const FormPersonalDetails = (props) => {

    const clickHandler = (e) => {
        e.preventDefault();
        props.next();
    }

    const changeHandler1 = (e) => {
        const input = "occupation";
        props.textValues(input, e);
      }
    const changeHandler2 = (e) => {
        const input = "city";
        props.textValues(input, e);
      }
    const changeHandler3 = (e) => {
        const input = "bio";
        props.textValues(input, e);
      }


    return (

        <>
          <NavBar title="Personal Details" />

          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '29ch' }, }} noValidate
            autoComplete="off" >
          <div style={{ marginLeft: "200px", marginTop: '40px' }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value1 } onChange={ changeHandler1 } id="outlined" label="Enter Your Occupation" placeholder="Required" />
          </div>
          <div style={{ marginLeft: "200px" }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value2 } onChange={ changeHandler2 } id="outlined" label="Enter Your City" placeholder="Required" />
          </div>
          <div style={{ marginLeft: "200px" }}>
            <TextField style={{ boxShadow: '3px 3px 5px hsl(0, 0%, 60%)' }} value={ props.value3 } onChange={ changeHandler3 } id="outlined-multiline-static" multiline rows={4} label="Describe Yourself" />
          </div>
          <Button variant="outlined" style={{ marginLeft: "220px", marginTop: "20px" }} onClick={ props.previous }><NavigateBeforeIcon />Back</Button>
          <Button variant="contained" disabled={ props.value1.length < 3 || props.value2.length < 3 || props.value3.length < 15 } style={{ marginLeft: "10px", marginTop: "20px" }} onClick={ clickHandler }>Continue<NavigateNextIcon /></Button>
          </Box>
        </>

    );
}



export default FormPersonalDetails;

