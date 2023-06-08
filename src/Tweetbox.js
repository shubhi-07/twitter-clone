import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import './Tweetbox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './Firebase';

function Tweetbox() {
  const [tweetmsg, setTweetmsg] = useState("");
  const [tweetimg, setTweetimg] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();
    console.log("kjhkjh");
    try {
      console.log("hey");
      const docref = await db.collection("posts").add({
        displayName: 'Shubhi Sharma',
        username: 'i_shubhiiii',
        verified: true,
        text: tweetmsg,
        image: tweetimg,
        avatar: <Avatar />,
      });
      console.log("Document written with ID: ", docref.id);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetmsg(e.target.value)}
            value={tweetmsg}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetimg(e.target.value)}
          value={tweetimg}
          className="tweetbox__inputimg"
          placeholder="Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__btn">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;