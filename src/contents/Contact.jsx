import React, { Component } from "react";
import Social from "../components/Social";
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <a href="mailto:niyajkumanali@email.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i>&nbsp;&nbsp;niyajkumanali@gmail.com</a><br/><br/>
        <a href="https://codepen.io/niyaj-kumanali" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i>&nbsp;&nbsp;CodePen</a><br/><br/>
        <a href="https://github.com/niyaj-kumanali" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>&nbsp;&nbsp;GitHub</a><br/><br/>
        <a href="https://Instagram.com/ili____n_i_y_a_z____ili" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>&nbsp;&nbsp;Instagram</a><br/><br/>
        <a href="https://Linkedin.com/in/Niyaj-Kumanali" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i>&nbsp;&nbsp;LinkedIN</a><br/><br/>

      </div>
    );
  }
}

export default Contact;
