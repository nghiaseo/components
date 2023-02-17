import './chat-content.css'
import chatIcon from '../../assets/images/message.svg'
import Chats from '../chats/chats'
function ChatContent(pros){
    const noChat = <div className='nochat-container'>
                <div className='nochat-content'>
                    <div className='nochat-content-img'>
                        <img src={chatIcon} alt=""></img>
                    </div>
                    <div onClick={()=>pros.handleTabId(2)} className='nochat-content-start'>
                    Start Conversation
                    </div>
                </div>
            </div>
        
    const chat =<div className='chat-container'>
        <Chats partnerUsername = {pros.partnerUsername}></Chats>
    </div>
    const content = pros.partnerUsername?chat:noChat
    return(
        <div className='chat-content-container'>
            {content}
        </div>
    )
}
export default ChatContent