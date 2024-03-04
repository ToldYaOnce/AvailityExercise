import { useUserContext } from "../../contexts/RegistrationContext";
import TextInput from "../TextInput/TextInput";

export default function NPINumber() {
  const {registration, setRegistration} = useUserContext();

  return <TextInput label="NPI Number" required={true} value={registration.npiNumber} 
    callback={(val: string) => setRegistration({...registration, npiNumber: val})} 
  />
}