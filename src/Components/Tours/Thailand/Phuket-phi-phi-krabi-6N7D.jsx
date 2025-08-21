import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


import James_bond from '../../../assets/James_bond.jpg'
import Phuket_city from '../../../assets/Phuket_city.jpg'
import Krabi_fish from '../../../assets/Krabi_fish.jpg'
import Tiger_show from '../../../assets/Tiger_show.jpg'
import Siam_Niramit from '../../../assets/Siam_Niramit.jpg'
import Island_tour2 from '../../../assets/4island_tour2.jpg'


const PhuketPhiPhiKrabi6N7D =()=>{

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
                        <img src={Tiger_show} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Island_tour2} className='destinationImage'/>
                        <img src={James_bond} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Siam_Niramit} className='destinationImage'/>
                        <img src={Krabi_fish} className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>6Nights 7Days</p>
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
                      <p>51500/-</p>
                  </div>

               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights accommodation in Glow Ao-nang Krabi</p>
                          <p>2 Nights accommodation in Phi Phi Natural Resort</p>
                          <p>2 Nights accommodation in Andakira Phuket Patong</p>
	                  <p>Daily Breakfast</p>
                          <p>Round-trip airport transfers</p>
	                  <p>04 Island tour on SIC Long Tail Boat with local lunch without national park fee</p>
	                  <p>James Bond Island tour on SIC Big boat with Canoe with lunch without  national park fee</p>
	                  <p>Phuket City tour with Big Tiger Ticket</p>
	                  <p>Siam Niramit show with dinner</p>
	                  <p>Hopping Island tour from phi phi Island on Private long tail boat without Lunch</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p> International Airfare</p>
	                   <p> Visa </p>
	                   <p> National Park fee has be to paid directly at the tour only</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Krabi Hotel</p>
                      <p><strong>Day2:</strong> 04 Island tour on SIC Long Tail Boat with local lunch</p>
	              <p><strong>Day3:</strong> Transfer to Phi Phi Island Hotel</p>
	              <p><strong>Day4:</strong> James Bond Island and Hopping Island tour on SIC Big boat with Canoe with lunch</p>
	              <p><strong>Day5:</strong> Transfer to Phuket Hotel</p>
	              <p><strong>Day6:</strong> Phuket City tour with Big Tiger Ticket, Siam Niramit show with dinner</p>
	              <p><strong>Day7:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default PhuketPhiPhiKrabi6N7D
