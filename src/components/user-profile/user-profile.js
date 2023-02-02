import './user-profile.css'
import avatar from '../../assets/images/avata.jpg'
import StatusIcon from '../shared/status-icon/status-icon'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import DropdownPanel from '../shared/dropdown-panel'
import AboutTemp from '../../templates/about'
function UserProfile(){
    const description = `If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.`
    const titleAbout = {
        title:'About',
        icon:'user'
    }
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
                <DropdownPanel title={titleAbout} content={<AboutTemp></AboutTemp>} ></DropdownPanel>
            </div>
        </div>
    )
}
export default UserProfile