import './index.css'
function AboutTemp(pros){
    return(
        <div className='about-temp-container'>
            <div>
                <label>Name</label>
                <div>{pros.name||'name here'}</div>
            </div>
            <div>
                <label>Email</label>
                <div>{pros.email||'email here'}</div>
            </div>
            <div>
                <label>Location</label>
                <div>{pros.location||'location here'}</div>
            </div>
        </div>
    )
}
export default AboutTemp