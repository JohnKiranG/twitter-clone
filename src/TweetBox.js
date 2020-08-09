import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "John Kiran",
      username: "johnkiran",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.frja1-1.fna.fbcdn.net/v/t31.0-8/29873165_2148266142082414_6805114234297018818_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=SFmbN_on_SEAX_z-sge&_nc_ht=scontent.frja1-1.fna&oh=970ac17a1301ebf8a99014498d2e3832&oe=5F5438FD",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.frja1-1.fna.fbcdn.net/v/t31.0-8/29873165_2148266142082414_6805114234297018818_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=SFmbN_on_SEAX_z-sge&_nc_ht=scontent.frja1-1.fna&oh=970ac17a1301ebf8a99014498d2e3832&oe=5F5438FD" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
