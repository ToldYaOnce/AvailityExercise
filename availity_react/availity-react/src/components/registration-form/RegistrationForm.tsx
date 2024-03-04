import { useState } from "react";
import RegistrationContext, { User } from "../../contexts/RegistrationContext";
import Address from "../address/Address";
import FullName from "../full-name/FullName";
import NPINumber from "../npi-number/NPINumber";
import PhoneInput from "../phone-input/PhoneInput";
import './RegistrationForm.css'
import { Button } from "@mui/material";
export default function RegistrationForm(){
  const [registration, setRegistration] = useState<User>({
    firstName: '',
    firstNameValid: false,
    lastName: '',
    lastNameValid: false,
    npiNumber: '',
    npiNumberValid: false,
    phoneNumber: '',
    phoneNumberValid: false,
    addressLine1: '',
    addressLine1Valid: false,
    addressLine2: '',
    addressLine2Valid: false,
    city: '',
    cityValid: false,
    state: '',
    stateValid: false,
    zipCode: '',
    zipCodeValid: false,  
  
  });
  return (
    <RegistrationContext.Provider value={{registration, setRegistration}}>
    <div className="form">
      <div><FullName /></div>
      <div><NPINumber /></div>
      <div><Address /></div>
      <div><PhoneInput /></div>
      <div><Button variant="contained" onClick={(e) => {
        console.log (registration);
      }}>Contained</Button></div>
    </div>
    </RegistrationContext.Provider>

    )
  
}