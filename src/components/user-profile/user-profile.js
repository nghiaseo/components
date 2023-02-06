import './user-profile.css'
import avatar from '../../assets/images/avata.jpg'
import StatusIcon from '../shared/status-icon/status-icon'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import DropdownPanel from '../shared/dropdown-panel'
import AboutTemp from '../../templates/about'
import {useEffect,useState} from 'react'
import {userService} from '../../services/userService'
import {decodeToken} from 'react-jwt'
function UserProfile(){
    const description = `If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.`
    const titleAbout = {
        title:'About',
        icon:'user'
    }
    const username = decodeToken(localStorage.getItem('token')).username;
    const [userInfo,setUserInfo] = useState(undefined)
    useEffect(()=>{
       const  getUserInfo = async ()=>{
        const info = (await userService.getUser(username)).data.data
        setUserInfo(info)
       }
       getUserInfo()
    },[])
    function statusHandle(stas){
        let status = ''
        if(stas===0) status = 'offline'
        if(stas===1) status = 'online'
        if(stas===2){ status = 'busy'}
         return (<>
        <StatusIcon status={status}></StatusIcon>
        <div className='status-text'>{status}</div>
        </>)
    }
    return(
        <div className='user-profile-container'>
            <MenuItemHeading option={true} title={'My Profile'}></MenuItemHeading>
            <div className='user-profile-general'>
                <div className='user-profile-general-avata'>
                    <img src={avatar} alt=""></img>
                </div>
                <div className='user-profile-general-name'>admin</div>
                <div className='user-profile-general-status'>
                    {statusHandle(1)}
                </div>
            </div>
            <div className='description'>{description}</div>
            <div>
                <DropdownPanel title={titleAbout} content={<AboutTemp userInfo={userInfo}></AboutTemp>} ></DropdownPanel>
            </div>
        </div>
    )
}
export default UserProfile