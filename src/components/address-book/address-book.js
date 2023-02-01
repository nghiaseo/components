import './address-book.css'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import {useContext,useState} from 'react'
import {Context} from '../../pages/home/home'
function AddressBook(){
    const context=useContext(Context)
    console.log(context.data)
    return (
        <div className='address-book-container'>
            <MenuItemHeading option={true} title={'Contacts'}></MenuItemHeading>
        </div>
    )
}
export default AddressBook