import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile.png";
import Social from "../components/Social";
import Intro from "./Intro/Intro"

export default function Home() {
  return (
    <div className="condiv home">
      {/* <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
      <ReactTypingEffect
        className="typingeffect"
        text={["I am Niyaj Kumanali", "I am a web developer", "I am a Java Developer"]}
        speed={80}
        eraseDelay={700}
      /> */}
      <Intro />
      <Social />
    </div>
  );
}


