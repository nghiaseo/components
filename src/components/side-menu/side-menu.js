import './side-menu.css'
import Item from './item/item'
import ItemContent from './item-content/item-content'
import {useState} from 'react'
function SideMenu(){
    const items = [
        {
            id:0,
            icon:'user'
        },
        {
            id:1,
            icon:'comment'
        },{
            id:2,
            icon:'address-book'
        },{
            id:3,
            icon:'gear'
        }]
    const [activeItem,setActiveItem]= useState(0)
    const handleClickMenuItem = (id)=>{
        setActiveItem(id)
        }
    const listItems = items.map((item,)=><li key={item.id} className={'side-menu-item '+(activeItem===item.id?'active':'')} 
     onClick={()=>handleClickMenuItem(item.id)}><Item icon={item.icon}></Item></li>)
    return(
        <div className='side-menu'>
        <ul className='side-menu-items'>
            {listItems}
        </ul>
        <div className='side-menu-item-content'>
            <ItemContent contentId={activeItem}></ItemContent>
        </div>
        </div>
    )
}
export default SideMenu;