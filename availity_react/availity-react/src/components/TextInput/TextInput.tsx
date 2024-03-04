import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import './TextInput.css'

export default function TextInput(props: any = {}, inputProps: any = {}) {
  const [error, setError] = useState<boolean>(false)
  const [helperText, setHelperText] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(props.required && e.target.value === ""){
      setError(true);
      setHelperText(`${props.label} is required`);
    }
    else{
      setError(false);
      setHelperText('')      
    }
    if(props.callback){
      props.callback(e.target.value)
    }
  };

  return <TextField 
    {...props} 
    className="space-right"
    variant='standard' 
    error={error}
    InputLabelProps={{...inputProps, shrink: true }} 
    helperText={helperText}
    onChange={onChange} 
    onBlur={onChange}
  />
}