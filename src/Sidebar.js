import React, { useEffect, useState } from "react";
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import Sidebaropt from "./Sidebaropt";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import db from './Firebase';
import Profile from "./Profile";

function Sidebar() {
     const [posts, setPosts] = useState([]);
 
     useEffect(() => {                       /*useEffect runs on the basis of the condition*/
         db.collection('posts').onSnapshot(snapshot => (     /*it is listening whwnever data from database 
     changes aur update it will provide a snapshot */
             setPosts(snapshot.docs.map(doc => doc.data()))     /*this will provide an array of all the posts in the database*/
 
         ))
 
     }, [])
    return (
        <div className="sidebar">
            {/* Sidebar */}
            <TwitterIcon className="Sidebar__twittericon" />

            <Sidebaropt active Icon={HomeIcon} text="Home" />
            <Sidebaropt Icon={SearchIcon} text="Explore" />
            <Sidebaropt Icon={NotificationsNoneIcon} text="Notification" />
            <Sidebaropt Icon={MailOutlineIcon} text="Messages" />
            <Sidebaropt Icon={BookmarkBorderIcon} text="Bookmark" />
            <Sidebaropt Icon={ListAltIcon} text="Lists" />
            <Sidebaropt Icon={PermIdentityIcon} text="Profile" />
            <Sidebaropt Icon={MoreHorizIcon} text="More" />


            <Button variant="outlined" className="Sidebar__tweet" fullWidth>Tweet</Button>

            {posts.map(profile => (
                <Profile profileName={profile.profileName}
                    profileusername={profile.profileusername} />


            ))}





        </div>
    );
}

export default Sidebar;