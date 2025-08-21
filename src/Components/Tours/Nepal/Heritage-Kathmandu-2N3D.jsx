import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import CableCar from '../../../assets/cable_car.jpg'
import ChandragiriHills from '../../../assets/Chandragiri_Hills.jpg'
import ChandragiriHillsTop from '../../../assets/Chandragiri_hills_top.jpg'
import SwayambhuStupa from '../../../assets/swayambhu_stupa.jpg'
import KathmanduPokhara from '../../../assets/kathmandu-and-pokhara.jpg'
import KathmanduNepal from '../../../assets/kathmandu-nepal.jpg'


const HeritageKathmandu2N3D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);


   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Heritage Kathmandu</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={ CableCar } className='destinationImage'/>
                        <img src={ ChandragiriHills } className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={ ChandragiriHillsTop } className='destinationImage'/>
                        <img src={ SwayambhuStupa } className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={ KathmanduPokhara } className='destinationImage'/>
                        <img src={ KathmanduNepal } className='destinationImage'/>
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
                      <p>20000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>• 2 Night accommodation in Kathmandu on Double/Twin/Triple sharing Basis.</p>
                          <p>• Daily breakfast at the hotel Kathmandu</p>
                          <p>• 1 Full Day sightseeing at Kathmandu</p>
                          <p>• Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>• International Airfare</p>
                           <p>• Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p>• Chandragiri Cable Car. Entrance & monument fees</p>
	                   <p>•	Licensed holder tour guide during sightseeing</p>
                           <p>• Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Kathmandu Hotel</p>
                      <p><strong>Day2:</strong> visit Chandragiri hills by cable car and Swyambhunath stupa</p>
	              <p><strong>Day3:</strong> Departure and drop to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HeritageKathmandu2N3D
