import './index.css'
function ChatBox(pros){
    return(
        <div className={pros.mess.sender===0?'ownMessage':'partnerMessage'}>
            <div className='chat-box-container'>
        {pros.mess.mess}
        </div>
        </div>
    )
}
export default ChatBox;