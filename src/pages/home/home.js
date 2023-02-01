
import './home.css'
import SideMenu from '../../components/side-menu/side-menu'
import ChatContent from '../../components/chat-content/chat-content';
import {useEffect,createContext,useState} from 'react'
import {userService} from '../../services/userService'
const Context = createContext()
function Home(){
    const [listUsers,setListUsers]=useState()
useEffect( ()=>{
    async function getAllUser(){
        const users = (await userService.getAlluser()).data
        setListUsers(users)
    }
     getAllUser()
},[])
    return(
        <Context.Provider value={listUsers}>
        <div className="home-container">
            <SideMenu></SideMenu>
            <ChatContent></ChatContent>
        </div>
        </Context.Provider>
    )
}
export  {Home,Context};
