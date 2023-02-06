import './index.css'

function AboutTemp(pros){    
    return(
        <div className='about-temp-container'>
            <div>
                <label>Name</label>
                <div>{pros.userInfo?.fullname||'name here'}</div>
            </div>
            <div>
                <label>Email</label>
                <div>{pros.userInfo?.email||'email here'}</div>
            </div>
            <div>
                <label>Location</label>
                <div>{pros.userInfo?.location||'location here'}</div>
            </div>
        </div>
    )
}
export default AboutTemp