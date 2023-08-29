import React, { Component } from "react";
import Skill from "./Skill";

import javaImg from "../img/java.png";
import pythonImg from "../img/python.png";
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import javascriptImg from "../img/js.png";
import mlImg from "../img/machine-learning.png";
import reactjsImg from "../img/reactjs.png";
import sqlImg from "../img/sql.png";

class Skills extends Component {

  render() {
    return (
      <div className="condiv skills ">
        <h1 className="subtopic">My Skills</h1>
        <ul className="skill-row">
          <Skill img={javaImg} sname="Java" />
          <Skill img={sqlImg} sname="SQL" />
          <Skill img={htmlImg} sname="HTML" />
          <Skill img={cssImg} sname="CSS" />
          <Skill img={javascriptImg} sname="JavaScript" />
          <Skill img={reactjsImg} sname="ReactJS" />
          <Skill img={pythonImg} sname="Python" />
          <Skill img={mlImg} sname="Machine Learning" />
        </ul>
      </div>
    );
  }
}

export default Skills;
