import React, { useEffect, useState } from "react";
import './Feed.css';
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from './Firebase' ;
function Feed() {
    const [posts, setPosts]=useState([]);

    useEffect(()=> {                       /*useEffect runs on the basis of the condition*/
    db.collection('posts').onSnapshot(snapshot => (     /*it is listening whwnever data from database 
    changes aur update it will provide a snapshot*/
    setPosts(snapshot.docs.map(doc => doc.data()))     /*this will provide an array of all the posts in the database*/

    ))

    } ,[])
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* Tweetbox */}
            <Tweetbox />
            {/* posts */}
            {posts.map(post => (

            <Post displayName={post.displayName}
             username={post.username}
              text={post.text}
            verified={post.verified}
            avatar={post.avatar}
            image={post.image} />

            ))}
            
            

        </div>
    );
}

export default Feed;