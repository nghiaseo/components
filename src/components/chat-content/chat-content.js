import './chat-content.css'
import chatIcon from '../../assets/images/message.svg'
function ChatContent(pros){
    const noChat = <div className='nochat-container'>
                <div className='nochat-content'>
                    <div className='nochat-content-img'>
                        <img src={chatIcon} alt=""></img>
                    </div>
                    <div className='nochat-content-start'>
                    Start Conversation
                    </div>
                </div>
            </div>
        
    const chat =<div className='chat-container'></div>
    const content = pros.id?chat:noChat
    return(
        <div className='chat-content-container'>
            {content}
        </div>
    )
}
export default ChatContent