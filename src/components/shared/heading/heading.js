import LockIcon from '@material-ui/icons/Lock';
import "./heading.css"
function NSheading(){
    return(
        <div className="heading-container">
            <div className="heading-icon"><LockIcon></LockIcon></div>
            
            <h2>Sign In</h2>
        </div>
    )
}
export default NSheading;