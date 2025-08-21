import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Fihalhohi_1 from '../../../assets/Fihalhohi_1.jpg'
import Fihalhohi_2 from '../../../assets/Fihalhohi_2.jpg'
import Fihalhohi_3 from '../../../assets/Fihalhohi_3.jpg'
import Fihalhohi_4 from '../../../assets/Fihalhohi_4.jpg'
import Fihalhohi_5 from '../../../assets/Fihalhohi_5.jpg'
import Fihalhohi_6 from '../../../assets/Fihalhohi_6.jpg'


const FihalhohiIslandResort3N4D =()=>{

 
   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);


   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Fihalhohi Island Resort</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Fihalhohi_1} className='destinationImage'/>
                        <img src={Fihalhohi_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Fihalhohi_3} className='destinationImage'/>
                        <img src={Fihalhohi_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Fihalhohi_5} className='destinationImage'/>
                        <img src={Fihalhohi_6} className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>3Nights 4Days</p>
	          </div>
	          <div className='duration'>
	              <p><strong>Minimum</strong></p>
	              <p>2 Person</p>
                  </div>
	          <div className='duration'>
                      <p><strong>Pickup & Drop</strong></p>
                      <p>Airport</p>
                  </div>
	          <div className='duration'>
                      <p><strong>Per person</strong></p>
                      <p>55000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights Resort accommodation in Deluxe Sky Room</p>
                          <p>Meet & Greet at the Airport</p>
                          <p>Return Airport Transfer by Speedboat</p>
	                  <p>Meet & Greet at the Airport</p>
	                  <p>Full Board Breakfast, Lunch & Dinner</p>
	                  <p>Complimentary Welcome Drink on arrival</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
	                   <p>Visa </p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Fihalhohi Island Resort</p>
                      <p><strong>Day2:</strong> Free Day for Activity</p>
                      <p><strong>Day3:</strong> Free Day for Activity</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default FihalhohiIslandResort3N4D
