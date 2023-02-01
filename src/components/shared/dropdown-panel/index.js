import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser,faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react'
library.add(faUser,faCaretDown);
function DropdownPanel(pros) {
    const [expand,setExpand]= useState(false)
    const clickTitleHandle = ()=>{
        setExpand(!expand)        
    }

  return (
    <div className={"dropdownpanel-container "+(expand?'expand':'')}>
      <div className="dropdownpanel-title" onClick={clickTitleHandle}>
        <div className="dropdownpanel-title-info">
          <div className="dropdownpanel-title-icon">
            <FontAwesomeIcon icon={pros.title.icon}></FontAwesomeIcon>
          </div>
          <div className="dropdownpanel-title-text">{pros.title.title}</div>
        </div>
        <div className="dropdownpanel-caret">
            <FontAwesomeIcon icon={'caret-down'}></FontAwesomeIcon>
        </div>
      </div>
      <div className="dropdownpanel-content">
        <div className="dropdownpanel-content-wrap">
        {pros.content}        
        </div>
      </div>
    </div>
  );
}
export default DropdownPanel;
