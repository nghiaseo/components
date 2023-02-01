import './item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faComment,faAddressBook,faGear } from '@fortawesome/free-solid-svg-icons'
library.add(faUser,faComment,faAddressBook,faGear)
function Item(pros){
    return(
        <div className='side-menu-item'>
            <FontAwesomeIcon icon={pros.icon}></FontAwesomeIcon>
        </div>
    )
}
export default Item