import React from "react";
// import ReactTypingEffect from "react-typing-effect";
import './Profile.css';
import profileImg from "../../img/profile.png"

export default function Profile() {
  return (
    <div className="profile">
      <img className="profile-img" src={profileImg} alt="profile-img" />
      {/* <h2>Hello.</h2>
      <p className="intro">I am a Java and Web Developer</p>
      <ReactTypingEffect
          className="typingeffect intro"
          text={["I am Niyaj Kumanali", "I am a Web developer and a Java Developer"]}
          speed={60}
          eraseDelay={300}
        /> */}
    </div>
  );
}
