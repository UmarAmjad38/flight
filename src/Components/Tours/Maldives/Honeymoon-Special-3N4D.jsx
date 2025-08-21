import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Diamonds_1 from '../../../assets/Diamonds_1.jpg'
import Diamonds_2 from '../../../assets/Diamonds_2.jpg'
import Diamonds_3 from '../../../assets/Diamonds_3.jpg'
import Diamonds_4 from '../../../assets/Diamonds_4.jpg'
import Diamonds_5 from '../../../assets/Diamonds_5.jpg'
import Diamonds_6 from '../../../assets/Diamonds_6.jpg'

const DiamondsAthuruga3N4D =()=>{

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

	
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Honeymoon Special Trip On Diamonds Athuruga Maldives Resort & SPA</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Diamonds_1} className='destinationImage'/>
                        <img src={Diamonds_2} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Diamonds_3} className='destinationImage'/>
                        <img src={Diamonds_4} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Diamonds_5} className='destinationImage'/>
                        <img src={Diamonds_6} className='destinationImage'/>
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
                      <p>96000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights Hotel accommodation in Beach Villa</p>
                          <p>1 Night Hotel accommodation in Water Villa</p>
                          <p>Meet & Greet at the Airport</p>
                          <p>Welcome drink</p>
                          <p>Flowers set up in the room upon arrival.</p>
                          <p>Fruit basket and bottle of wine served in the room upon arrival.</p>
                          <p>20% discount at the Boutique</p>
                          <p>Breakfast, lunch and dinner served buffet the Makeyn Restaurant</p>
                          <p>A’la carte lunch served at the Boli beach bar</p>
                          <p>Snacks, cocktails, soft drinks, fruit juices, tea and coffee served at the Boli beach bar from 10:00 to 24:00</p>
                          <p>Beer, wine served by the glass, selected spirits and cocktails served at the Boli beach bar from 10:00 to 24:00</p>
                          <p>Daily stocked Mini bar in the room: soft drinks, still water, sparkling water and beer on request</p>
                          <p>Wi-Fi internet in selected public areas, in the Beach Front Junior Suites and in the Water Villas.</p>
                          <p>Water sports activities: canoes and SUP</p>
                          <p>Laser sailing and windsurfing (for expert guests)</p>
                          <p>Beach towels and sun beds.</p>
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
                      <p><strong>Day1:</strong> Arrive at Maldives International airport and Transfer Diamonds Athuruga Maldives Resort & SPA</p>
                      <p><strong>Day2:</strong> Free Day for Activity</p>
	              <p><strong>Day3:</strong> free Day for Activity</p>
	              <p><strong>Day4:</strong> After breakfast transfer to the Male Airport with happy memories of the tour</p>
	       </div>
           </div>
     </div>	   
   )
}
export default DiamondsAthuruga3N4D
