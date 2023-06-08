import React from "react";
import './Profile.css';
import { Avatar } from "@material-ui/core";
function Profile({ profileName, profileusername}){
    return(
        <div className="sidebar__id"> 
        <Avatar />
        <div className="sidebar__idText">
        <h3>{profileName}</h3>
        <h5 className="sidebar__idSpecial"> @{profileusername}</h5> 
        </div>
        
        </div>
        );
}

export default Profile;