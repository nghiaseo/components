import './NSInput.css'
import { useState } from 'react';
function NSInput(pros){
    const [value,setValue] = useState(pros.value)
    const onChange = (e)=>{
        setValue(e.target.value)
        pros.getInputData(e.target.value)
    }
    return(        
        <div className='nsinput-container'>
        {pros.label&&<label>{pros.label}</label>}
        <input value={value} type={pros.type} onChange={onChange}></input>
        </div>
    )
    
}
export default NSInput;