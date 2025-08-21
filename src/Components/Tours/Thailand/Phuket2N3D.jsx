import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Phuket from '../../../assets/Phuket.jpg'
import Pattaya from '../../../assets/Pattaya.jpg'
import PhiPhi from '../../../assets/phi_phi.jpg'
import Krabi from '../../../assets/Karabi.jpg'


const Phuket2N3D =()=>{


   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Phuket</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pattaya} className='destinationImage'/>
                        <img src={PhiPhi} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Phuket} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Krabi} className='destinationImage'/>
                        <img src={Pattaya} className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>2Nights 3Days</p>
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
                      <p>19000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 nights hotel accommodation with breakfast</p>
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
	              <p><strong>Day3:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default Phuket2N3D
