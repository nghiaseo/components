import { InputLabel,FormControl, OutlinedInput,} from '@material-ui/core';
import {useState} from 'react'
import './chats.css'
function Chats(pros) {
    const placeholder = "Nhập nội dung"
    const [message,setMessage] = useState('')
    const handleMessageChange = (mess)=>{
        setMessage(mess)
    }

  return (
    <div className="chat-history-container">
      <div className="chat-history-content">{pros.partnerUsername}</div>
      <div className="chat-history-send-container">
      <FormControl className='form-send-mess'  variant='outlined'>
      <OutlinedInput className='form-send-mess-input' value={message} 
      placeholder={placeholder}
      onChange={e=>handleMessageChange(e.target.value)}
      ></OutlinedInput>
      </FormControl>
      </div>
    </div>
  );
}
export default Chats;
