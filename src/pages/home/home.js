
import './home.css'
import SideMenu from '../../components/side-menu/side-menu'
import ChatContent from '../../components/chat-content/chat-content';
import {useEffect,createContext,useState} from 'react'
import {userService} from '../../services/userService'
import { useNavigate } from 'react-router-dom';
const Context = createContext()
function Home(){
    const nav = useNavigate()
    const [listUsers,setListUsers]=useState()
    const [tabId,setTabId]=useState(0)
    const [partnerUsername,setPartnerUsername] = useState(undefined)
    const handleClickPartnername = (e)=>{
        setPartnerUsername(e)
    }
    const handleTabId = (id)=>{
        setTabId(id)}
useEffect( ()=>{
    const token = localStorage.getItem('token')
    if(!token) nav('/login')
    async function getAllUser(){
        const users = (await userService.getAlluser()).data
        setListUsers(users)
    }
     getAllUser()
},[])
    return(
        <Context.Provider value={listUsers}>
        <div className="home-container">
            <SideMenu  onClickPartnerName ={handleClickPartnername} handleTabId={handleTabId} tabId={tabId}></SideMenu>
            <ChatContent partnerUsername={partnerUsername} handleTabId={handleTabId} ></ChatContent>
        </div>
        </Context.Provider>
    )
}
export  {Home,Context};
