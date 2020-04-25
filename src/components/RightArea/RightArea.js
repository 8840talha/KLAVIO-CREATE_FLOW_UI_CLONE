import React from 'react';
import './RightArea.css';
import SmallCard from '../SmallCard/SmallCard';
const RightArea = () => {
    
  function changeBackground(e) {
    e.target.style.background = 'lightgray';
  }
  function changeBackgroundOnMouseOut(e) {
    e.target.style.background = 'whitesmoke';
  }
  
const   style={
     border:'1px solid black'
 }

    return (

        <div className="RightArea">
            <SmallCard style={style} Over={changeBackground} out={changeBackgroundOnMouseOut}  heading="Create from Scratch" data="Prefer a blank slate? Create your own flow from scratch." />
            <SmallCard heading="Happy Birthday Email Standard" data="Foster a more personal relationship with your customers! This flow triggers an email on a recipient's birthday." />
            <SmallCard heading="Order In Transit-AfterShip" data="Notify customers when their orders are in transit with this transactional flow." />
            <SmallCard heading="Order Out for Delivery-AfterShip" data="Notify customers when their orders are out for delivery with this transactional flow" />
            <SmallCard heading="Received Delivery-AfterShip" data="Notify customers when their orders have been delivered with this transactional flow." />
            <SmallCard heading="Point Redemption Campaign-Smile Rewards" data="Build a segment of those ready to redeem over 500 points and encourage them to use their reward" />
            <SmallCard heading="Tag VIP Customers-Enrich Customer Profiles" data="This flow will automatically tag VIP customers so you can use this data for segmentation & to split paths in future flows." />
            <SmallCard heading="Welcome Series-Standard" data="Welcome new subscribers with a 3-email series that provides an introduction to your business and encourages conversion." />
        </div>
    )




}
export default RightArea;