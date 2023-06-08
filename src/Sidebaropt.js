import React from "react";
import './Sidebaroption.css';

function Sidebaropt({active,text ,Icon}){
    return(
        <div className={`Sidebaropt ${active && `Sidebaropt--active`}`}> 
        <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default Sidebaropt;