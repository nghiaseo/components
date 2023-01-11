import "./login.css"
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { InputLabel,FormControl, InputAdornment, IconButton, OutlinedInput,Button,FormHelperText } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import NSheading from '../../components/shared/heading/heading';
import axios from '../../interceptors/commonInterceptor';

const useStyle = makeStyles({
  input:{
  width:'300px'
  },
  btnSingIn:{
    color:'#fff',
    fontWeight:'bold',
    backgroundColor:'#33cc77',
    width:'120px',
    '&:hover':{
        backgroundColor:'#33cc77',
    }
  },
  errMes:{
    color:'red'
  }
})
function Login() {
  const [showPassword,setShowPassword]=useState(false)  
  const [password,setPassword]=useState('')
  const [username,setUsername] = useState('')
  const [usernameDirty,setUsernameDirty]=useState(false)
  const [passwordDirty,setPasswordDirty]=useState(false)
  const style = useStyle()
  const login = ()=>{
    axios.post('auth/login',{username,password}).then(res=>{
      console.log(res)
    },
    e=>{
      console.log(e.message)
    }
    )
  }
  const hanldeUsenameChange = e=>{
    setUsername(e.target.value)
    setUsernameDirty(true)
  }
  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
    setPasswordDirty(true)
  }
  return (
    <div className='main'>
        <div className="login-container">
      <NSheading></NSheading>
      <div className="login-input">
      <FormControl className={style.input} variant='outlined'>
      <InputLabel>Username</InputLabel>
      <OutlinedInput error={usernameDirty&&username===''} labelWidth={80} value={username} 
      onChange={e=>hanldeUsenameChange(e)}
      ></OutlinedInput>
      {(usernameDirty&&username==='')&&(<FormHelperText className={style.errMes}>Username is required !</FormHelperText>)}
      </FormControl>
      <FormControl className={style.input} variant='outlined'>
        <InputLabel>Password</InputLabel>
        <OutlinedInput error={passwordDirty&&password===''} type={showPassword?'text':'password'} value={password}
        onChange={e=>handlePasswordChange(e)}
        labelWidth={80}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<Visibility></Visibility>:<VisibilityOff></VisibilityOff>}</IconButton>
          </InputAdornment>
        }
        ></OutlinedInput>
        {(passwordDirty&&password==='')&&(<FormHelperText className={style.errMes}>Password is required !</FormHelperText>)}
      </FormControl>
      </div>
      <div className="login-action">
        <Button className={style.btnSingIn} onClick={login}>Sign In</Button>
    </div>    
      </div>
    </div>
  );
}

export default Login;
