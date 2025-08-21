import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


import ParaCeiling from '../../../assets/para_ceiling.jpg'
import Pattaya from '../../../assets/Pattaya.jpg'
import PattayaCoral1 from '../../../assets/Pattaya_coral1.jpg'
import PattayaCoral2 from '../../../assets/Pattaya_coral2.jpg'
import PattayaCoral3 from '../../../assets/Pattaya_coral3.jpg'
import PattayaCoral4 from '../../../assets/Pattaya_coral4.jpg'


const Phuket2N3D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Pattaya</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pattaya} className='destinationImage'/>
                        <img src={ParaCeiling} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={PattayaCoral1} className='destinationImage'/>
                        <img src={PattayaCoral2} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={PattayaCoral3} className='destinationImage'/>
                        <img src={PattayaCoral4} className='destinationImage'/>
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
