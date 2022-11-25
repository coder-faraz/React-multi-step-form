
import Table from 'react-bootstrap/Table';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import "bootstrap/dist/css/bootstrap.min.css";      //to add CSS Styling of bootstrap components
import NavBar from './NavBar';




const Confirm = (props) => {

    return (

        <>
        <NavBar title="Confirm Details" />

        <div style={{width: "50%", margin: "40px auto", textAlign: "center"}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{fontSize: '26px', textShadow: "3px 3px 6px hsl(0, 0%, 60%)", letterSpacing: '2px', textTransform: "uppercase"}} colSpan={4}>Details</th>
            </tr>
          </thead>
      
          <tbody style={{fontSize: "18px"}}>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>First Name</td>
              <td colSpan={2}>{ props.value1.charAt(0).toUpperCase() + props.value1.slice(1) }</td>
            </tr>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>Last Name</td>
              <td colSpan={2}>{ props.value2.charAt(0).toUpperCase() + props.value2.slice(1) } </td>
            </tr>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>Email Address</td>
              <td colSpan={2}>{ props.value3 } </td>
            </tr>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>Occupation</td>
              <td colSpan={2}>{ props.value4.charAt(0).toUpperCase() + props.value4.slice(1) } </td>
            </tr>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>City</td>
              <td colSpan={2}>{ props.value5.charAt(0).toUpperCase() + props.value5.slice(1) } </td>
            </tr>
            <tr>
              <td style={{fontWeight: '700'}} colSpan={2}>About Yourself</td>
              <td colSpan={2}>{ props.value6.charAt(0).toUpperCase() + props.value6.slice(1) } </td>
            </tr>
          </tbody>
        </Table>

        <Button variant="outlined" style={{ marginLeft: '-20px', marginTop: "20px" }} onClick={ props.previous }><NavigateBeforeIcon />Back</Button>
        <Button variant="contained" style={{ marginLeft: '360px', marginTop: "20px" }} onClick={ props.next }>Continue<NavigateNextIcon /></Button>
        </div>
        </>
    );
}



export default Confirm;

