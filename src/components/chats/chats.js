import { FormControl, OutlinedInput } from "@material-ui/core";
import { conversationService } from "src/services/conversation.service";
import { userService } from "src/services/userService";
import { decodeToken } from "react-jwt";
import { useState, useEffect ,useRef} from "react";
import io from 'socket.io-client'
import "./chats.css";
import ChatBox from "../text-box";
const host = 'http://localhost:5000'
const socket = io.connect(host)
function Chats(pros) {
  const bottomRef = useRef(null)
  const placeholder = "Nhập nội dung";
  const [message, setMessage] = useState("");
  const [yourId] = useState(decodeToken(localStorage.getItem("token")).id);
  const [receiver, setReceiver] = useState();
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    socket.on('sendDataServer', (data) =>{
      const lastMess = {sender:(data.data.sender==yourId?0:1),mess:data.data.message}
      console.log(lastMess)
       setChatHistory([...chatHistory, lastMess])
      });
  }, [chatHistory]);
  useEffect(()=>{
    userService.getUser(pros.partnerUsername).then(res=>{
          setReceiver(res.data.data)
          return res.data.data.id
        }).then(res=>{
          conversationService.getConversation({id1:yourId,id2:res}).then(conversation=>{
            const messages = conversation.data.data
            const chats = []
            for(const message of messages){
              if(message.sender==yourId) chats.push({sender:0,mess:message.message})
              else chats.push({sender:1,mess:message.message})
            }
            setChatHistory(chats)
          })
        })

  },[pros])

  const handleMessageChange = (mess) => {
    setMessage(mess);
  };
  const sendMessage = async (m) => {
    setMessage("");
    const message = {
      sender: yourId,
      receiver: receiver?.id,
      message: m,
    };
    socket.emit('sendDataClient', message)
    await conversationService.sendMessage(message);
  };
  const handleKeyup = (e) => {
    if (e.keyCode === 13) {
      sendMessage(message);
    }
  };
  const messages = () =>
    chatHistory.map((message,i) => <ChatBox key={i} mess={message}></ChatBox>);
  const chatHistoryContainer = () => (
    <div className="chat-history-container">
      <div className="chat-history-header">
        {receiver?.fullname ||pros.partnerUsername}
      </div><div className="wrapper">
      <div className="chat-history-content">{messages()}</div><div ref={bottomRef}></div></div>
      <div className="chat-history-send-container">
        <FormControl className="form-send-mess" variant="outlined">
          <OutlinedInput
            className="form-send-mess-input"
            value={message}
            placeholder={placeholder}
            onKeyUp={(e) => handleKeyup(e)}
            onChange={(e) => handleMessageChange(e.target.value)}
          ></OutlinedInput>
        </FormControl>
      </div>
    </div>
  );
  return chatHistoryContainer();
}
export default Chats;
