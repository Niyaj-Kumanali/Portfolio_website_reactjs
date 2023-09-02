import React from 'react';
import './Intro.css'
import cloudImg from '../../img/cloud.png';
import mountainImg from '../../img/mountain.png'

export default function Intro() {
  return (
    <div className="top-container">
      <img className="top-cloud" src={cloudImg} alt="cloud-img" />
      <h1 className='name'>I'm Niyaj Kumanali</h1>
      <h2 className='sub'>
        a&nbsp;<span className="pro">Web&nbsp;Developer</span>
      </h2>
      <img className="bottom-cloud" src={cloudImg} alt="cloud-img" />
      <img className="mountain-img" src={mountainImg} alt="mountain-img" />
    </div>
  );
}
