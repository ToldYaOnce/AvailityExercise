import MuiPhoneNumber from "material-ui-phone-number-2";
import { useState } from "react";
import { useUserContext } from "../../contexts/RegistrationContext";

export default function PhoneInput() {
  const {registration, setRegistration} = useUserContext();

  const [error, setError] = useState<boolean>(false)
  const [helperText, setHelperText] = useState<string>('')
  const onChange = (e: any, testLengh: boolean) => {
    const regex = /\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
    if(testLengh && !regex.test(e)){
      setError(true);
      setHelperText(`Phone Number is invalid`);
     }
     else{
      setError(false);
      setHelperText('')      
     }
  };

  return <MuiPhoneNumber 
    disableCountryCode={true} 
    disableDropdown={true}
    defaultCountry="us"
    onlyCountries={['us']}
    label="Phone Number"
    helperText={helperText}
    value={registration.phoneNumber}
    error={error}
    onChange={(e:any) => {
      onChange(e, e.length === 14)
      setRegistration({...registration, phoneNumber: e})
    }}
    
    onBlur={ (e) => {
      onChange(e.target.value, true)
      setRegistration({...registration, phoneNumber: e.target.value})
    }}
  />
}