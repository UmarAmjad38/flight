import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import tonsai from '../../../assets/tonsai.jpg'
import Phuket_city from '../../../assets/Phuket_city.jpg'
import Krabi_fish from '../../../assets/Krabi_fish.jpg'
import phi_phi from '../../../assets/phi_phi.jpg'
import Island_tour1 from '../../../assets/4island_tour1.jpg'
import Island_tour2 from '../../../assets/4island_tour2.jpg'


const PhuketPhiPhiKrabi5N6D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Phuket Phi Phi Krabi</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Phuket_city} className='destinationImage'/>
                        <img src={tonsai} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={phi_phi} className='destinationImage'/>
                        <img src={Krabi_fish} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Island_tour1} className='destinationImage'/>
                        <img src={Island_tour2} className='destinationImage'/>
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
                      <p>41500/-</p>
                  </div>

               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights accommodation in Andarika Phuket</p>
                          <p>1 Nights accommodation in Phi Phi Natural Resort</p>
                          <p>2 Nights accommodation in Hula Hula Krabi Resort</p>
	                  <p>Daily Breakfast</p>
                          <p>4 Island tour on Long tail boat on sharing basis with lunch wihout National Park fee</p>
	                  <p>Phuket City tour with Big Triger ticket for 5 hours</p>
                          <p>Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
	                   <p>Visa </p>
	                   <p>National Park fee</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Krabi Hotel</p>
                      <p><strong>Day2:</strong> 4 Island tour on Long tail boat on sharing basis with lunch wihout National Park fee</p>
	              <p><strong>Day3:</strong> Transfer to Phi Phi Island Resort</p>
	              <p><strong>Day4:</strong> Transfer to Phuket Hotel</p>
	              <p><strong>Day5:</strong> Phuket City tour with Big Triger ticket for 5 hours</p>
	              <p><strong>Day6:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default PhuketPhiPhiKrabi5N6D
