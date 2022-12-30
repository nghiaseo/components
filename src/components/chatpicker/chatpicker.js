import { useEffect, useState } from "react";
import useFriendStatus from '../hooks/chatHooks'
const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
  ];
  function useAbc(recipientID){
    // const [a,setA]=useState()
    // useEffect(()=>{})
  }
  function ChatRecipientPicker() {
   
      
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);  
    useAbc(recipientID)
    console.log('chat with id',recipientID)
    return (
      <div>
        <div style={{backgroundColor:isRecipientOnline ? 'green' : 'red',height:'100px'}} />
        <select
          value={recipientID}
          onChange={e => setRecipientID(Number(e.target.value))}
        >
          {friendList.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  export default ChatRecipientPicker;