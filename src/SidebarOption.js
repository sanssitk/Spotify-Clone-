import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, img }) { 
  
  return (
    <div className="sidebarOption" >
      {!Icon && <img className="sidebarOption__images" src={img} alt="" />}
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
