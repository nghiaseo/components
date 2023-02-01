import './menu-item-heading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
library.add(faEllipsisVertical)
function MenuItemHeading(pros){
    return (
        <div className="menu-item-heading">
            <div className="menu-item-heading-text">{pros.title}</div>
            {pros.option && <div className="menu-item-heading-option">
                <FontAwesomeIcon icon={"ellipsis-vertical"}></FontAwesomeIcon>
                </div>}
        </div>
    )
}
export default MenuItemHeading