import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Sun_Siyam_1 from '../../../assets/Sun_Siyam_1.jpg'
import Sun_Siyam_2 from '../../../assets/Sun_Siyam_2.jpg'
import Sun_Siyam_3 from '../../../assets/Sun_Siyam_3.jpg'
import Sun_Siyam_4 from '../../../assets/Sun_Siyam_4.jpg'
import Sun_Siyam_5 from '../../../assets/Sun_Siyam_5.jpg'
import Sun_Siyam_6 from '../../../assets/Sun_Siyam_6.jpg'


const SunSiyamOlhuveli3N4D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Sun Siyam Olhuveli</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Sun_Siyam_1} className='destinationImage'/>
                        <img src={Sun_Siyam_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Sun_Siyam_3} className='destinationImage'/>
                        <img src={Sun_Siyam_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Sun_Siyam_5} className='destinationImage'/>
                        <img src={Sun_Siyam_6} className='destinationImage'/>
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
                      <p>1020000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights Resort accommodation in Deluxe Room</p>
                          <p>1 Nights Resort accommodation in Water Villa</p>
                          <p>Return Airport Transfer by Speedboat</p>
	                  <p>Meet & Greet at the Airport</p>
                          <p>Full Board Meal Plan (Breakfast, Lunch & Dinner)</p>
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
                      <p><strong>Day1:</strong> Arrival and Transfer to Sun Siyam Olhuveli Resort</p>
                      <p><strong>Day2:</strong> Free Day for Activity</p>
	              <p><strong>Day3:</strong> Transfer to Water Villa</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default SunSiyamOlhuveli3N4D
