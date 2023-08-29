import React, { Component } from "react";
import Profile from "./Profile/Profile"

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <Profile />
        <h4>Hey there,</h4>
        <h1>I'm Niyaj Kumanali</h1>
        <h3>
          Full Stack Web <u>Developer</u> | UI <u>Designer</u>
        </h3>
        <br></br>
        <p style={{'lineHeight': 2}}>
          I started my journey in the world of computers from an young age, now
          I’m 22 years old, and I completed my Computer Science Degree from VSM's Somashekhar R. Kothiwale Institute of Technology, Nipani. Web development is my center of interest. I also like creating Interactive UI components for better UX and share those desgin and codes to the world through Github.</p>
      </div>
    );
  }
}

export default About;
