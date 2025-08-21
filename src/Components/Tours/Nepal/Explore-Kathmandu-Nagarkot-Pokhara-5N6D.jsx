import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nagarkot from '../../../assets/Nagarkot.jpg'
import DurbarSquare from '../../../assets/Durbar_square.jpg'
import CableCar from '../../../assets/cable_car.jpg'
import TrishuliRiver from '../../../assets/Trishuli_river.jpg'
import DevisFall from '../../../assets/Devis_fall.jpg'
import PokharaLake from '../../../assets/Pokhara_lake.jpg'


const ExploreKathmanduNagarkotPokhara5N6D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);


   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Explore Kathmandu Nagarkot Pokhara</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={ DurbarSquare } className='destinationImage'/>
                        <img src={ Nagarkot } className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={ TrishuliRiver } className='destinationImage'/>
                        <img src={ PokharaLake } className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={ DevisFall } className='destinationImage'/>
                        <img src={ CableCar } className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>5Nights 6Days</p>
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
                      <p>41000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>• 3 Nights hotel accommodation in Kathmandu on Double/Twin/Triple sharing Basis</p>
                          <p>• 2 Nights hotel accommodation in Pokhara on Double/Twin/Triple sharing Basis</p>
                          <p>• Daily Breakefast</p>
	                  <p>• Full Day sightseeing at Nagarkot</p>
	                  <p>• Half Day sightseeing at Pokhara</p>
                          <p>• Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>• International Airfare</p>
                           <p>• Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p>• Licensed holder tour guide during sightseeing, Chandragiri cable car. Entrance & monument fees</p>
                           <p>• Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Kathmandu Hotel</p>
                      <p><strong>Day2:</strong> Nagarkot day trip</p>
	              <p><strong>Day3:</strong> Kathmandu Drive to Pokhara </p>
	              <p><strong>Day4:</strong> Pokhara Sightseeing</p>
	              <p><strong>Day5:</strong> Pokhara to Kathmandu drive back</p>
	              <p><strong>Day6:</strong> Departure and drop to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default ExploreKathmanduNagarkotPokhara5N6D
