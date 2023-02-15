import axios from '../interceptors/commonInterceptor';
const conversationEndpoint = 'conversation/'
const sendMessage = (mess) =>axios.post(conversationEndpoint+'create-mess',mess)
const getConversation = (couple)=>axios.post(conversationEndpoint+'getConversation',couple)
export const conversationService = {
    sendMessage,getConversation
}