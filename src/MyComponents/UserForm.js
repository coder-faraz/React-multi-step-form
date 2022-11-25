
import React, { useState } from 'react';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Success from './Success';



const UserForm = () => {

    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    //Proceed to the next step
    const nextStep = () => {
        setStep(step + 1);
    }

    //Go back to the previous step
    const previousStep = () => {
        setStep(step - 1);
    }

    //This will handle any change in the input fields defined above using useState
    const inputHandler = (name, e) => {
      if(name==="fname") setFirstName(e.target.value)
      else if(name==="lname") setLastName(e.target.value)
      else if(name==="email") setEmail(e.target.value)
      else if(name==="occupation") setOccupation(e.target.value)
      else if(name==="city") setCity(e.target.value)
      else if(name==="bio") setBio(e.target.value)
    }


    switch(step) {
        case 1: 
          return (
            <FormUserDetails next={ nextStep } textValues={ inputHandler } value1={ firstName } value2={ lastName } value3={ email } />
          );
        case 2:
          return (
            <FormPersonalDetails next={ nextStep } previous={ previousStep } textValues={ inputHandler } value1={ occupation } value2={ city } value3={ bio } />
          );
        case 3:
          return (
            <Confirm next={ nextStep } previous={ previousStep } value1={ firstName } value2={ lastName } value3={ email } value4={ occupation } value5={ city } value6={ bio } />
          );
        case 4:
          return (
            <Success />
          );
    }
}


export default UserForm;
