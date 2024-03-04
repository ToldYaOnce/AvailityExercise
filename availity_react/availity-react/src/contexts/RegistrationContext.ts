import { createContext, useContext } from "react";

export interface User {
  firstName: string,
  firstNameValid: boolean,
  lastName: string,
  lastNameValid: boolean,
  npiNumber: string,
  npiNumberValid: boolean,
  phoneNumber: string,
  phoneNumberValid: boolean,
  addressLine1: string,
  addressLine1Valid: boolean,
  addressLine2: string,
  addressLine2Valid: boolean,
  city: string,
  cityValid: boolean,
  state: string,
  stateValid: boolean,
  zipCode: string,
  zipCodeValid: boolean,  
} 

export interface UserRegistration{
  registration: User,
  setRegistration: (registration: User) => void
}

const RegistrationContext = createContext<UserRegistration | undefined>(undefined);

export function useUserContext() : UserRegistration{
  const registration = useContext(RegistrationContext);
  if (!registration) {
    throw new Error("useUserContext must be used within a RegistrationProvider");
  }
  return registration;
}

export default RegistrationContext;