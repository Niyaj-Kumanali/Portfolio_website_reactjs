import React from "react";

export default function Skill(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card img cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.sname}</h5>
                    <p className="card-text">{props.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>
    );
}