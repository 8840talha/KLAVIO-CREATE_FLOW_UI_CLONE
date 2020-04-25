import React from 'react'
import './CheckBoxArea.css'
import CheckBox from '../CheckBox/CheckBox'
class CheckBoxArea extends React.Component {

   state = {
      showCheckBoxArea: 'true'
   }

   CheckBoxAreaHandler = () => {
      this.setState({ showCheckBoxArea: !this.state.showCheckBoxArea })
   }


   render() {
      let Area = '';
      if (this.state.showCheckBoxArea) {
         Area = (
            <div className="CheckBoxArea" >


               <CheckBox label="Abandoned Cart" />
               <CheckBox label="Browse Abandonment" />
               <CheckBox label="Post-Purchase Followup" />
               <CheckBox label="Subscriber Welcome" />
               <CheckBox label="Transactional" />
               <CheckBox label="Tag Contact Profiles" />
            </div>

         )
      } else {
         Area = '';
      }

      return (
         <div className="ContainerA">
            <h6>Type<button className="ButtonA" onClick={this.CheckBoxAreaHandler}>ADD</button></h6>
            {Area}
         </div>

      )

   }

}

export default CheckBoxArea;


