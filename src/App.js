import './App.css';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { InputLabel,FormControl, InputAdornment, IconButton, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import NSheading from './components/shared/heading/heading';
const useStyle = makeStyles({
  input:{
  width:'300px'
  }
})
function App() {
  const [showPassword,setShowPassword]=useState(false)  
  const [password,setPassword]=useState('')
 const style = useStyle()
  

  return (
    <div className='main'>
      <NSheading></NSheading>
      <FormControl className={style.input} variant='outlined'>
      <InputLabel>Username</InputLabel>
      <OutlinedInput labelWidth={80}></OutlinedInput>
      </FormControl>
      <FormControl className={style.input} variant='outlined'>
        <InputLabel>Password</InputLabel>
        <OutlinedInput type={showPassword?'text':'password'} value={password}
        onChange={e=>setPassword(e.target.value)}
        labelWidth={80}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<Visibility></Visibility>:<VisibilityOff></VisibilityOff>}</IconButton>
          </InputAdornment>
        }
        ></OutlinedInput>
      </FormControl>
    </div>
  );
}

export default App;
