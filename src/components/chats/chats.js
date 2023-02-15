import { FormControl, OutlinedInput,} from '@material-ui/core';
import { conversationService } from 'src/services/conversation.service';
import { userService } from 'src/services/userService';
import {decodeToken} from 'react-jwt'
import {useState,useEffect} from 'react'
import './chats.css'
import ChatBox from '../text-box';
function Chats(pros) {
  const history = [
    {sender:0,mess:'nghia'},
    {sender:1,mess:'ban'},
    {sender:1,mess:'you'},
    {sender:0,mess:'ok'},
  ]
  const [senderId]= useState(decodeToken(localStorage.getItem('token')).id)
  const [receiver,setReceiver] = useState()
  useEffect(()=>{
    getUserByUsername(pros.partnerUsername)
  },[pros])
  const getUserByUsername = async (username)=>{
    const res = await userService.getUser(username)
    setReceiver(res.data.data)    
  }
  const [chatHistory,setChatHistory] = useState(history)
    const placeholder = "Nhập nội dung"
    const [message,setMessage] = useState('')
    const handleMessageChange = (mess)=>{
        setMessage(mess)
    }
    const sendMessage = async (m)=>{
      chatHistory.push({
        sender:0,
        mess:m
      })
      setChatHistory(chatHistory)
      setMessage('')
      const message = {
        sender:senderId,
        receiver:receiver.id,
        message:m
      }
      await conversationService.sendMessage(message)
    }
    const handleKeyup = (e)=>{
      if(e.keyCode===13){
      sendMessage(message)
      }
    }
    const messages = ()=> chatHistory.map(message=><ChatBox mess={message}></ChatBox>)
  return (
    <div className="chat-history-container">
      <div className="chat-history-header">{receiver?.fullname||receiver?.username||'Unnamed'}</div>
      <div className="chat-history-content">{messages()}</div>
      <div className="chat-history-send-container">
      <FormControl className='form-send-mess'  variant='outlined'>
      <OutlinedInput className='form-send-mess-input' value={message} 
      placeholder={placeholder}
      onKeyUp={e=>handleKeyup(e)}
      onChange={e=>handleMessageChange(e.target.value)}
      ></OutlinedInput>
      </FormControl>
      </div>
    </div>
  );
}
export default Chats;
