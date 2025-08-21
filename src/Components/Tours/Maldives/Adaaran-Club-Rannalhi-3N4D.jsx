import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Adaaran_1 from '../../../assets/Adaaran_1.jpg'
import Adaaran_2 from '../../../assets/Adaaran_2.jpg'
import Adaaran_3 from '../../../assets/Adaaran_3.jpg'
import Adaaran_4 from '../../../assets/Adaaran_4.jpg'
import Adaaran_5 from '../../../assets/Adaaran_5.jpg'
import Adaaran_6 from '../../../assets/Adaaran_6.jpg'


const AdaaranClubRannalhi3N4D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Adaaran Club Rannalhi</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Adaaran_1} className='destinationImage'/>
                        <img src={Adaaran_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Adaaran_3} className='destinationImage'/>
                        <img src={Adaaran_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Adaaran_5} className='destinationImage'/>
                        <img src={Adaaran_6} className='destinationImage'/>
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
                      <p>78000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights Resort accommodation with Classic Room</p>
                          <p>Meet & Greet at the Airport</p>
                          <p>Return Airport Transfer by Speedboat Combined</p>
	                  <p>All Inclusive Meal Plan</p>
	                  <p>Complimentary Welcome Drink on arrival</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
	                   <p>Visa</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Adaaran Club Rannalhi Resort</p>
                      <p><strong>Day2:</strong> Free day for Activity</p>
	              <p><strong>Day3:</strong> Free day for Activity</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default AdaaranClubRannalhi3N4D
