import React from 'react'
import './Card.css'
import CheckBoxArea from '../CheckBoxArea/CheckBoxArea'
import CheckBoxArea1 from '../CheckBoxArea1/CheckBoxArea1';
import CheckBoxArea2 from '../CheckBoxArea2/CheckBoxArea2'

class  Card extends React.Component{
   render(){
      return(
         <div className="card">
             
           <input type="text" placeholder="Search by name"/>
           <CheckBoxArea />
           <CheckBoxArea1/>
           <CheckBoxArea2/>
           
              </div>
            )
            
   }
   
}

export default Card;