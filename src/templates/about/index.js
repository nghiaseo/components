import './index.css'
import {decodeToken} from 'react-jwt'
function AboutTemp(){
    const token = localStorage.getItem('token')
    const userInfo = decodeToken(token)
    return(
        <div className='about-temp-container'>
            <div>
                <label>Name</label>
                <div>{userInfo.fullname||'name here'}</div>
            </div>
            <div>
                <label>Email</label>
                <div>{userInfo.email||'email here'}</div>
            </div>
            <div>
                <label>Location</label>
                <div>{userInfo.location||'location here'}</div>
            </div>
        </div>
    )
}
export default AboutTemp