import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="BE | Computer Science" where="VSM's Somashekhar R. Kothiwale Institute of Technology" place="Nipani, Karnataka, India" from="2019" to="2023" grade="CGPA : 8.4"/>
            <Widecard title="PUC | Science" where="KLE's G. I. Bagewadi Arts, Science & Commerce College" place="Nipani, Karnataka, India" from="2017" to="2019"  grade="Percentage : 66.67%"/>
            <Widecard title="SSLC | HSC" where="Nutan Marathi Vidyalay"  place="Nipani, Karnataka, India" from="2007" to="2017"  grade="Percentage : 87.36%"/>
            </div>
            )
        }
    }
    
export default Education
     