import './address-book.css'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import {useContext,useState} from 'react'
import {Context} from '../../pages/home/home'
import { makeAddressBook } from '../../services/address-book.service'
function AddressBook(){
    const context=useContext(Context)
    const addressBook =  makeAddressBook(context.data)
    console.log(addressBook)
    // const listAddress = addressBook.map(()=><li>a</li>)
    return (
        <div className='address-book-container'>
            <MenuItemHeading option={true} title={'Contacts'}></MenuItemHeading>
            <div className='addressBook'>
                <ul>
                    {/* {listAddress} */}
                </ul>
            </div>
        </div>
    )
}
export default AddressBook