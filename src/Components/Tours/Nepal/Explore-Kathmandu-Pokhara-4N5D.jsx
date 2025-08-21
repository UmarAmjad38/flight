import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import CableCar from '../../../assets/cable_car.jpg'
import ChandragiriHills from '../../../assets/Chandragiri_Hills.jpg'
import ChandragiriHillsTop from '../../../assets/Chandragiri_hills_top.jpg'
import TrishuliRiver from '../../../assets/Trishuli_river.jpg'
import DevisFall from '../../../assets/Devis_fall.jpg'
import PokharaLake from '../../../assets/Pokhara_lake.jpg'


const ExploreKathmanduPokhara4N5D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);


   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Explore Kathmandu Pokhara</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={ TrishuliRiver } className='destinationImage'/>
                        <img src={ DevisFall } className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={ ChandragiriHillsTop } className='destinationImage'/>
                        <img src={ PokharaLake } className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={ CableCar } className='destinationImage'/>
                        <img src={ ChandragiriHills } className='destinationImage'/>
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
                      <p>38000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>• 2 Nights hotel accommodation in Kathmandu on Double/Twin/Triple sharing Basis</p>
                          <p>• 2 Nights hotel accommodation in Pokhara on Double/Twin/Triple sharing Basis</p>
	                  <p>• Daily breakfast</p>
                          <p>• 2 Half Day sightseeing at Pokhara</p>
                          <p>• Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>• International Airfare</p>
                           <p>• Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p>• Licensed holder tour guide during sightseeing</p>
                           <p>• Cable car and Enterance Fee</p>
                           <p>• Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Kathmandu Hotel</p>
                      <p><strong>Day2:</strong> Drive to Pokhara</p>
	              <p><strong>Day3:</strong> Pokhara Sightseeing</p>
	              <p><strong>Day4:</strong> Pokhara to Kathmandu drive Enroute visit Chandragiri</p>
	              <p><strong>Day5:</strong> Departure and drop to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default ExploreKathmanduPokhara4N5D 
