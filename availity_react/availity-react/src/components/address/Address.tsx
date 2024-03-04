import { useUserContext } from "../../contexts/RegistrationContext";
import TextInput from "../TextInput/TextInput";

export default function Address(){
  const {registration, setRegistration} = useUserContext();
  return <>
  
  <div><TextInput 
    label="Address line 1" 
    required={true} 
    value={registration.addressLine1} 
    callback={(val: string) => setRegistration({...registration, addressLine1: val})} 
  /></div>
  <div><TextInput label="Address line 2" required={false} 
    value={registration.addressLine2} /></div>
    callback={(val: string) => setRegistration({...registration, addressLine2: val})} 
  <div>
    <TextInput label="City" 
      required={true} 
      value={registration.city}
      callback={(val: string) => setRegistration({...registration, city: val})} 
      />
    <TextInput 
      label="State" 
      required={true}
      value={registration.state}
      callback={(val: string) => setRegistration({...registration, state: val})} 
      />
    <TextInput
      label="Zip" 
      required={true} 
      value={registration.zipCode}
      callback={(val: string) => setRegistration({...registration, zipCode: val})} 
      />
  </div>
  </>

}