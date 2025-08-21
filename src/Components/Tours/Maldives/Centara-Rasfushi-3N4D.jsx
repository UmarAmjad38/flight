import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Centara_RasFushi_1 from '../../../assets/Centara_RasFushi_1.jpg'
import Centara_RasFushi_2 from '../../../assets/Centara_RasFushi_2.jpg'
import Centara_RasFushi_3 from '../../../assets/Centara_RasFushi_3.jpg'
import Centara_RasFushi_4 from '../../../assets/Centara_RasFushi_4.jpg'
import Centara_RasFushi_5 from '../../../assets/Centara_RasFushi_5.jpg'
import Centara_RasFushi_6 from '../../../assets/Centara_RasFushi_6.jpg'


const CentaraRasfushi3N4D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Centara Rasfushi</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Centara_RasFushi_1} className='destinationImage'/>
                        <img src={Centara_RasFushi_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Centara_RasFushi_3} className='destinationImage'/>
                        <img src={Centara_RasFushi_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Centara_RasFushi_5} className='destinationImage'/>
                        <img src={Centara_RasFushi_6} className='destinationImage'/>
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
                      <p>54000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights hotel accommodation in Lagoon view Beach Villa</p>
                          <p>Return Airport Transfer by Seaplane</p>
                          <p>Meet & Greet at the Airport</p>
	                  <p>Bed & Breakfast</p>
	                  <p>Complimentary Welcome Drink on arrival</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
	                   <p>Visa </p>
	                   <p>Lunch & Dinner</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Centara Rasfushi Resort</p>
                      <p><strong>Day2:</strong> Free day for Activity</p>
                      <p><strong>Day3:</strong> Free day for Activity</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default CentaraRasfushi3N4D
