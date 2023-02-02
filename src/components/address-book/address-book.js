import './address-book.css'
import MenuItemHeading from '../shared/menu-item-heading/menu-item-heading'
import {useContext,useState} from 'react'
import {Context} from '../../pages/home/home'
import { makeAddressBook } from '../../services/address-book.service'
function AddressBook(){
    const context=useContext(Context)
    const addressBook =  makeAddressBook(context.data)
    console.log(addressBook)
     const listAddress = addressBook.map((v)=><li key={v[0]}>
        <div className='addressBook-anphabet'>{v[0]}</div>
        <div className='addressBook-anphabet-item'><ul>{v[1].map((i)=><li>{i}</li>)}</ul></div>
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