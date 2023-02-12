import './address-book.css'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import {useContext} from 'react'
import {Context} from '../../pages/home/home'
import { makeAddressBook } from '../../services/address-book.service'
function AddressBook(pros){
    const context=useContext(Context)
    const addressBook =  makeAddressBook(context.data)
    const handleClickUsername = (username)=>{
        pros.onClickPartnerName(username)
    }
     const listAddress = addressBook.map((v)=><li key={v[0]}>
        <div className='addressBook-anphabet'>{v[0]}</div>
        <div className='addressBook-anphabet-item'><ul>{v[1].map((i)=><li key={i.username} onClick={()=>handleClickUsername(i.username)}  >{i.fullname}</li>)}</ul></div>
        </li>)
    return (
        <div className='address-book-container'>
            <MenuItemHeading option={true} title={'Contacts'}></MenuItemHeading>
            <div className='addressBook'>
                <ul>
                    {listAddress}
                </ul>
            </div>
        </div>
    )
}
export default AddressBook