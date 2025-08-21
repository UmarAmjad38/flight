import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Hulumale_1 from '../../../assets/Hulumale_1.jpg'
import Hulumale_2 from '../../../assets/Hulumale_2.jpg'
import Hulumale_3 from '../../../assets/Hulumale_3.jpg'
import Hulumale_4 from '../../../assets/Hulumale_4.jpg'
import Hulumale_5 from '../../../assets/Hulumale_5.jpg'
import Hulumale_6 from '../../../assets/Hulumale_6.jpg'


const HulhumaleMaafushi3N4D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);


   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Hulhumale Adventure Trip</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Hulumale_1} className='destinationImage'/>
                        <img src={Hulumale_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Hulumale_3} className='destinationImage'/>
                        <img src={Hulumale_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Hulumale_5} className='destinationImage'/>
                        <img src={Hulumale_6} className='destinationImage'/>
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
                      <p>27000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights Hotel accommodation with breakfast</p>
                          <p>Meet & Greet at the Airport</p>
                          <p>Full day adventure trips</p>
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
                      <p><strong>Day1:</strong> Arrive at Maldives International airport and Transfer Beach Arena Hotel</p>
                      <p><strong>Day2:</strong> Full day Adventure Trip (Includes Sandbank trip, Snorkeling, Dolphin Cruise, Local Island Visit along with lunch. Starts at morning 9am to 4pm)</p>
	              <p><strong>Day3:</strong> Enjoy the breeze of Maldives and rest & relax & overnight stay at the Hotel</p>
	              <p><strong>Day4:</strong> After breakfast transfer to the Male Airport with happy memories of the tour</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HulhumaleMaafushi3N4D
