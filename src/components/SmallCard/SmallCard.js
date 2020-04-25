import React from 'react';
import './SmallCard.css'
const SmallCard = (props) => {



    return (
        <div className="SmallCard" style={props.style} onMouseOut={props.out} onMouseOver={props.Over} >

    <h4>{props.heading}</h4>
    <p>{props.data}</p>
        </div>
    );



}

export default SmallCard;