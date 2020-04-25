import React from 'react';
import './CheckBox.css';


const CheckBox =(props)=>{

    return(
        <div>
<input type="checkbox" />
    <label className="label">{props.label}</label>
        </div>
    
)

}


export default CheckBox;
