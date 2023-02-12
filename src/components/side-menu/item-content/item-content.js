import UserProfile from "../../user-profile/user-profile"
import Chats from "../../chats/chats"
import AddressBook from "../../address-book/address-book"
import Setting from "../../setting/setting"
import './index.css'
function ItemContent(pros){
    function itemRendered(id){
        switch (id) {
            case 0:
                return <UserProfile></UserProfile>
            case 1:
                return <Chats></Chats>    
            case 2:
                return <AddressBook onClickPartnerName = {pros.onClickPartnerName}></AddressBook>
            case 3:
                return <Setting></Setting>   
            default:
                return <UserProfile></UserProfile>
        }
    }
    return (
        <div className="item-content-container">
            {itemRendered(pros.contentId)}
        </div>
    )
}
export default ItemContent