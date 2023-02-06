import "./side-menu.css";
import Item from "./item/item";
import ItemContent from "./item-content/item-content";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import {useNavigate} from 'react-router-dom'
library.add(faRightFromBracket);
function SideMenu() {
  const items = [
    {
      id: 0,
      icon: "user",
    },
    {
      id: 1,
      icon: "comment",
    },
    {
      id: 2,
      icon: "address-book",
    },
    {
      id: 3,
      icon: "gear",
    },
  ];
  const [activeItem, setActiveItem] = useState(0);
  const handleClickMenuItem = (id) => {
    setActiveItem(id);
  };
  const listItems = items.map((item) => (
    <li
      key={item.id}
      className={"side-menu-item " + (activeItem === item.id ? "active" : "")}
      onClick={() => handleClickMenuItem(item.id)}
    >
      <Item icon={item.icon}></Item>
    </li>
  ));
  const nav = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('token')
    nav('/login')
  }
  return (
    <div className="side-menu">
      <div className="navi-container">
        <ul className="side-menu-items">{listItems}</ul>
        <Tooltip title="Logout">
          <div className="logout" onClick={()=>logout()}>
            <FontAwesomeIcon icon={"right-from-bracket"}></FontAwesomeIcon>
          </div>
        </Tooltip>
      </div>
      <div className="side-menu-item-content">
        <ItemContent contentId={activeItem}></ItemContent>
      </div>
    </div>
  );
}
export default SideMenu;
