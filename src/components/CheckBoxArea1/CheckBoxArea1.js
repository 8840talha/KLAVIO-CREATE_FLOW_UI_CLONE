import React from 'react'
import './CheckBoxArea1.css'
import CheckBox from '../CheckBox/CheckBox'
class CheckBoxArea1 extends React.Component {

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
            <div className="CheckBoxArea1" >
               <CheckBox label="Nurture Prospects" />
               <CheckBox label="Convert Sales" />
               <CheckBox label="Up-Sell / Cross-Sell" />
               <CheckBox label="Build Loyalty" />
               <CheckBox label="Engage Lapsed Customers" />
               <CheckBox label="Sunset Unengaged Subscribers" />
            </div>

         )
      } else {
         Area = '';
      }

      return (
         <div className="ContainerB">
            <h6>Goal<button className="ButtonB" onClick={this.CheckBoxAreaHandler}>ADD</button></h6>
            {Area}
         </div>

      )

   }

}

export default CheckBoxArea1;


