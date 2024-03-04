import { useUserContext } from "../../contexts/RegistrationContext";
import TextInput from "../TextInput/TextInput";

export default function FullName(){
  const {registration, setRegistration} = useUserContext();
  return <>
    <TextInput 
      required 
      label="First Name" 
      defaultValuevalue={ registration.firstName } 
      callback={(val: string) => {
        setRegistration({...registration, firstName: val})
        console.log(registration);
      }} 
    />
    <TextInput 
      required
      label="Last Name"
      defaultValue={registration.lastName } 
      callback={(val: string) => setRegistration({...registration, lastName: val})} 
    />
  </>
}