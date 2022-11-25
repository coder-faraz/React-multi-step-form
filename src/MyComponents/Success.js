
import { Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import NavBar from './NavBar';



const Success = () => {

    setTimeout(() => {window.location.reload()}, 4000)

    return (

        <>
            <NavBar title="Success" />
            <Container style={{ marginTop: "40px", textAlign: 'center' }}>
                <CheckCircleIcon style={{fontSize: "106px", marginBottom: "20px"}} />
                <h3> Your Form Has Been Submitted</h3>
            </Container>
        </>

    );
}



export default Success;

