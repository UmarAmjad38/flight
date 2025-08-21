import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ParaCeiling from '../../../assets/para_ceiling.jpg'
import PattayaCoral1 from '../../../assets/Pattaya_coral1.jpg'
import PattayaCoral4 from '../../../assets/Pattaya_coral4.jpg'
import safari_world from '../../../assets/safari_world.jpg'
import safari_world2 from '../../../assets/safari_world2.jpg'
import safari_world3 from '../../../assets/safari_world3.jpg'

const BangkokPattaya4N5D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Bangkok Pattaya</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={ParaCeiling} className='destinationImage'/>
                        <img src={PattayaCoral1} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={PattayaCoral4} className='destinationImage'/>
                        <img src={safari_world} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={safari_world2} className='destinationImage'/>
                        <img src={safari_world3} className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>4Nights 5Days</p>
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
                      <p>28500/-</p>
                  </div>

               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 nights accommodation in Nova Express Hotel Pattaya with breakfast</p>
                          <p>2 nights accommodation in Anya Nana Hotel Bangkok with breakfast</p>
                          <p>Coral Island tour with lunch on a SIC basis</p>
                          <p>Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Pattaya Hotel</p>
                      <p><strong>Day2:</strong> Coral Island Day tour with lunch</p>
                      <p><strong>Day3:</strong> Pattaya Hotel to Bangkok Hotel</p>
                      <p><strong>Day4:</strong> Safari park + Marine Park  with lunch</p>
	              <p><strong>Day5:</strong> Transfer Bangkok Hotel to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default BangkokPattaya4N5D
