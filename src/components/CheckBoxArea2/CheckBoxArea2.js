import React from 'react'
import './CheckBoxArea2.css';
import CheckBox from '../CheckBox/CheckBox'
class CheckBoxArea2 extends React.Component {

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
            <div className="CheckBoxArea2" >


               <CheckBox label="AfterShip" />
               <CheckBox label="Smile.io" />
               <CheckBox label="Recharge" />
               
            </div>

         )
      } else {
         Area = '';
      }

      return (
         <div className="ContainerC">
            <h6>Ingtegration<button className="ButtonC" onClick={this.CheckBoxAreaHandler}>ADD</button></h6>
            {Area}
         </div>

      )

   }

}

export default CheckBoxArea2;


